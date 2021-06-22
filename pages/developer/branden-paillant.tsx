import Link from 'next/link'
import Layout from '@/components/Layout'
import Article from '@/components/Article'
import { getNextArticle } from './index'

function BrandenPaillant() {
    return (
        <Layout title="Shopify App Project: Branden Paillant">
            <Article
                title="Branden Paillant"
                description="An online presence and e-commerce print shop for a photographer of urban industrial landscapes."
                preface={
                    <ul>
                        <li>
                            In development at{' '}
                            <a href="https://brandenpaillant.com">
                                brandenpaillant.com
                            </a>
                        </li>
                    </ul>
                }
                nextArticle={getNextArticle('branden-paillant')}
            >
                <h2>Challenges</h2>
                <ul>
                    <li>
                        The client, a gifted up-and-coming photographer of urban
                        landscapes, had little online presence outside of
                        Instagram.
                    </li>
                    <li>
                        An online store to sell prints needed to be built from
                        scratch or use commercial APIs.
                    </li>
                    <li>
                        An photo gallery should exhibit the artist's work
                        elegantly without coming off as overly commercial.
                    </li>
                    <li>
                        The client's work was recently featured in
                        Hartsfield-Jackson Atlanta International Airport and
                        therefore a responsively-designed photo gallery would be
                        needed for both through-travelers that would look him up
                        on their mobile phones as well as other visitors that
                        would be using larger screens to view high resolution
                        versions of his works.
                    </li>
                </ul>

                <h2>Impact</h2>
                <ul>
                    <li>
                        Helped the client save over $500 a year, eliminating a
                        large cost hurdle to starting his business and promoting
                        his works.
                        <ul>
                            <li>
                                I set up an online store for the client as a{' '}
                                <a href="https://www.shopify.com/partners">
                                    Shopify Partner
                                </a>
                                , then leveraged Shopify’s GraphQL API to build
                                an external website.
                            </li>
                            <li>
                                This allowed the client to eliminate Shopify's
                                online store altogether and use the cheapest
                                pricing tier. The client paid less than 1/3 of
                                the service fees had he used Shopify's
                                full-features service.
                            </li>
                            <li>
                                Utilizing Shopify's CDN for static assets
                                allowed the client to eliminate any additional
                                costs besides the minimal hosting of the source
                                code.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Developed and deployed a fast, performant photo gallery
                        using static site technology.
                        <ul>
                            <li>
                                I set up continuous integration processes on AWS
                                Amplify using webhooks connected to the client’s
                                modifications to Shopify backend, removing the
                                need for me to push updates manually when
                                changes are made to the product database and
                                preserving the fast, ultralight speed of a
                                static website.
                            </li>
                        </ul>
                    </li>
                    <li>
                        I designed a fully responsive, minimalist photo gallery
                        that can be accessed on any screen size.
                    </li>
                </ul>
            </Article>
        </Layout>
    )
}

export default BrandenPaillant
