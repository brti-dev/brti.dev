import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

function Work() {
    return (
        <Layout>
            <Head>
                <title>Matt Berti - My Work</title>
            </Head>
            <h1>My Work</h1>
            <Link href="/">Matt Berti</Link>
        </Layout>
    )
}

export default Work