/* eslint-disable react/no-danger */
import Head from 'next/head'
import Layout from '../../components/Layout'
import Article, { ArticleContent } from '../../components/Article'
import { getPostSlugs, getPost } from '../../lib/posts'

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title} - Matt Berti Blog</title>
                {post.image && <meta name="og:image" content={post.image} />}
                {post.customCss && <link href={post.customCss} rel="stylesheet" />}
            </Head>
            <Article
                title={post.title}
                dateString={post.date}
            >
                {post.header && <header dangerouslySetInnerHTML={{ __html: post.header }} />}
                <ArticleContent htmlContent={post.contentHtml} />
            </Article>
        </Layout>
    )
}

// Return a list of possible route match values for [slug]
// Determined at build time; Added posts must rebuild
export async function getStaticPaths() {
    const paths = getPostSlugs()

    return {
        // Prerender these paths
        paths,
        // All routes absent those in path should 404
        fallback: false,
    }
}

// Fetch necessary data for the blog post using params.slug
// Note: this runs at build time
export async function getStaticProps({ params: { slug } }) {
    const post = await getPost(slug)

    return ({
        props: {
            post,
        },
    })
}
