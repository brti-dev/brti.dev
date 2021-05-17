import Link from 'next/link'

import { getSortedPosts, PostType } from '@/lib/posts'
import Layout from '@/components/Layout'
import Article, { ArticleContent } from '@/components/Article'
import Date from '@/components/Date'

export default function Blog({ posts }) {
    return (
        <Layout>
            <section>
                {posts.map((post: PostType) => (
                    <Article key={post.slug}>
                        <header>
                            <Date date={post.date} />
                            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                        </header>
                        <ArticleContent htmlContent={post.lede ?? post.contentHtml} />
                    </Article>
                ))}
            </section>
        </Layout>
    )
}

// pre-render this page at build time using the props returned
export async function getStaticProps() {
    const posts = await getSortedPosts()

    return { props: { posts } }
}
