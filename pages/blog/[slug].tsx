import { Article, ArticleContent } from 'matterial'
import Head from 'next/head'

import Layout from 'components/Layout'
import { getPostSlugs, getPost, PostType } from 'lib/posts'

export default function Post({ post }: { post: PostType }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} - Matt Berti Blog</title>
        {post.customCss && <link href={post.customCss} rel="stylesheet" />}
        {post.lede && (
          <meta
            name="description"
            content={post.lede.replace(/(<([^>]+)>)/gi, '')}
          />
        )}
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="Matt Berti" />
        {post.image && <meta property="og:image" content={post.image} />}
        {post.lede && (
          <meta
            property="og:description"
            content={post.lede.replace(/(<([^>]+)>)/gi, '')}
          />
        )}
      </Head>
      <Article title={post.title} date={post.date}>
        {post.header && (
          <header dangerouslySetInnerHTML={{ __html: post.header }} />
        )}
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

  return {
    props: {
      post,
    },
  }
}
