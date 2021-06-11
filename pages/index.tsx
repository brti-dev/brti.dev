import Link from 'next/link'

import Layout from '@/components/Layout'
import classes from '@/styles/index.module.css'

function HomePage() {
    return (
        <Layout description="Official website and digital portfolio of Mathew Berti, a professional full stack web developer and history teacher. Come meet me.">
            <div
                style={{ display: 'none' }}
                itemScope
                itemType="http://schema.org/Person"
            >
                <span itemProp="name">Matt Berti</span>
                <span itemProp="additionalName">Mathew Berti</span>
                <span itemProp="additionalName">Matthew Berti</span>
                <span itemProp="additionalName">Mathew Ryan Berti</span>
                <span itemProp="additionalName">BahaMatt</span>
                <span itemProp="additionalName">DrSpaceman</span>
                <a href="mailto:me@mattberti.com" itemProp="email">
                    Matt Berti
                </a>
                <img
                    src="/img/mattberti.png"
                    alt="Matt Berti"
                    itemProp="image"
                />
            </div>
            <section>
                <p>
                    Hi I&apos;m Matt, a{' '}
                    <Link href="/teacher">history teacher</Link> by day and{' '}
                    <Link href="/developer">full stack web developer</Link> by
                    night. I&apos;m passionate about <strong>videogames</strong>
                    , <strong>history</strong>, <strong>the outdoors</strong>,
                    and the Oxford Comma. Occasionally I{' '}
                    <Link href="/blog">write</Link> about the aforementioned
                    topics.
                </p>
                <p>
                    This web project is{' '}
                    <a
                        href="https://github.com/dr-spaceman/mattberti.com"
                        title="Open source Github repo codebase for mattberti.com"
                    >
                        🔎open source
                    </a>{' '}
                    and can be modified for your own personal
                    site/porfolio/blog. It served as the basis for{' '}
                    <a
                        href="https://github.com/dr-spaceman/next.js-starter"
                        title="Github repo: Next.js starter with typescript"
                    >
                        this Next.js app starter and UI component library
                    </a>
                    , which is also open source.
                </p>
                <dl className={classes.social}>
                    <dt>Find Me</dt>
                    {/* <dd><a href="https://twitter.com/bahamatt64">@bahamatt64</a></dd> */}
                    <dd>
                        <a href="https://github.com/dr-spaceman">Github</a>
                    </dd>
                    <dd>
                        <a href="https://www.linkedin.com/in/mrberti/">
                            Linkedin
                        </a>
                    </dd>
                    <dd>
                        <a href="https://steamcommunity.com/id/bahamatt/">
                            Steam
                        </a>
                    </dd>
                    <dd>
                        <a href="https://letterboxd.com/dr_spaceman/">
                            Letterboxd
                        </a>
                    </dd>
                    <dd>
                        <a href="mailto:me@mattberti.com">me@mattberti.com</a>
                    </dd>
                </dl>
            </section>
        </Layout>
    )
}

export default HomePage
