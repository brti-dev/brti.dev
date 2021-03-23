import Head from 'next/head'
import Layout from '../../components/Layout'
import Article from '../../components/Article'

function Camval() {
    return (
        <Layout>
            <Head>
                <title>Camval Produce - Project by Matt Berti</title>
            </Head>
            <Article
                title="Camval Produce"
                description="A responsive e-commerce app for a small produce delivery buisiness in San Diego."
                preface={(
                    <ul>
                        <li>In development at <a href="https://www.sandiegoproduce.shop">sandiegoproduce.shop</a></li>
                    </ul>
                )}
            >
                <p>I was excited to receive a contract to build this app because its scale was perfect for a single-page web app, which I had never built before. I prepared by diving into the <abbr title="MongoDB, Express.js, React, Node.js">MERN stack</abbr> and built <a href="./mern-tracker">Mern Issue Tracker</a> on top of several microservices, then used the technical understanding and boilerplate to develop this e-commerce app.</p>

                <h2>Back End</h2>
                <p>Express and Apollo Server power the API, which fetches data from a MongoDB database, made available at a GraphQL endpoint.</p>

                <h2>Front End</h2>
                <p>The UI is React with Material UI components. I had a great time with React hooks; No class components were harmed in the making of this app!</p>
                <p>I built a GraphQL client from scratch because the app merely requires a simple way to fetch queries and mutations from the API. Most of the work is done with two React hooks, <code>useQuery</code> and <code>useMutation</code>, each of which utilize a common fetching process that uses Javascript <code>fetch</code> API while managing the state of the fetch. The client handles errors based on the following maxims <a href="https://itnext.io/the-definitive-guide-to-handling-graphql-errors-e0c58b52b5e1" title="The Definitive Guide to Handling GraphQL Errors">described by Matt Krick</a>:</p>
                <ul>
                    <li>If GraphQL gives you a result with data, even if that result contains errors, it is not an error.</li>
                    <li>If the viewer should see the error, include the error as a field in the response payload</li>
                </ul>
            </Article>
        </Layout>
    )
}

export default Camval
