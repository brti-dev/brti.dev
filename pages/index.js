import Link from 'next/link'

import Layout from '../components/Layout'
import classes from './index.module.css'

function HomePage() {
    return (
        <Layout>
            <div style={{ display: 'none' }} itemScope itemType="http://schema.org/Person">
                <span itemProp="name">Matt Berti</span>
                <span itemProp="additionalName">Mathew Ryan Berti</span>
                <span itemProp="additionalName">BahaMatt</span>
                <span itemProp="additionalName">DrSpaceman</span>
                <a href="mailto:mat.berti@gmail.com" itemProp="email">Matt Berti</a>
                <img src="/img/mattberti.png" alt="Matt Berti" itemProp="image" />
            </div>
            <section>
                <p>
                    Hi I&apos;m Matt, a <Link href="/developer">full stack web developer</Link>.{' '}
                    I live in <a href="/china-expat">China</a> where I <Link href="/teacher">teach</Link> high school kids by day and code by night.{' '}
                    I&apos;m passionate about <Link href="/gamer">videogames</Link>, <Link href="/history">history</Link>, and <a href="https://en.wikipedia.org/wiki/Serial_comma">the Oxford Comma</a>.{' '}
                    Occasionally I <Link href="/blog">write</Link> about the aforementioned topics.{' '}
                    This website is <a href="https://github.com/dr-spaceman/mattberti.com">🔎open source</a>.
                </p>
                <dl className={classes.social}>
                    <dt>Find Me</dt>
                    <dd><a href="https://twitter.com/bahamatt64">@bahamatt64</a></dd>
                    <dd><a href="https://www.linkedin.com/in/mrberti/">Linkedin</a></dd>
                    <dd><a href="https://github.com/dr-spaceman">Github</a></dd>
                    <dd><a href="https://steamcommunity.com/id/bahamatt/">Steam</a></dd>
                    <dd><a href="https://letterboxd.com/dr_spaceman/">Letterboxd</a></dd>
                    <dd><a href="mailto:me@mattberti.com">me@mattberti.com</a></dd>
                </dl>
            </section>
        </Layout>
    )
}

export default HomePage
