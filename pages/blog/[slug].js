/* eslint-disable react/no-danger */
import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import { getPostSlugs, getPost } from '../../lib/posts'
import classes from '../../styles/article.module.scss'

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title} - Matt Berti Blog</title>
                {post.image && <meta name="og:image" content={post.image} />}
            </Head>
            <article className={classes.root}>
                <header>
                    <Date dateString={post.date} />
                    <h1>{post.title}</h1>
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
        </Layout>
    )
}

// Return a list of possible route match values for [slug]
// Determined at build time: Added posts must rebuild
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

    return {
        props: {
            post,
        },
    }
}
