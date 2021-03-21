import Link from 'next/link'

import { getSortedPosts } from '../../lib/posts'
import Layout from '../../components/Layout'
import Date from '../../components/Date'

export default function Blog({ posts }) {
    return (
        <Layout>
            <section>
                {posts.map(post => (
                    <article key={post.slug}>
                        <header>
                            <Date dateString={post.date} />
                            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                        </header>
                    </article>
                ))}
            </section>
        </Layout>
    )
}

// pre-render this page at build time using the props returned
export async function getStaticProps() {
    const allPostsData = getSortedPosts()
    return {
        props: {
            posts: allPostsData,
        },
    }
}
