import Link from 'next/link'

import { getSortedPosts } from '../../lib/posts'
import Layout from '../../components/Layout'
import Article from '../../components/Article'
import Date from '../../components/Date'

export default function Blog({ posts }) {
    return (
        <Layout>
            <section>
                {posts.map(post => (
                    <Article
                        key={post.slug}
                        header={(
                            <header>
                                <Date dateString={post.date} />
                                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                            </header>
                        )}
                        content={post.leadIn ?? post.contentHtml}
                    />
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
