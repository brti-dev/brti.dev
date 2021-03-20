import Link from 'next/link'

import Layout from '../components/layout'
import styles from './index.module.css'

function HomePage() {
    return (
        <Layout home>
            <div style={{ display:'none' }} itemScope itemType="http://schema.org/Person">
                <span itemProp="name">Matt Berti</span>
                <span itemProp="additionalName">Mathew Ryan Berti</span>
                <span itemProp="additionalName">BahaMatt</span>
                <span itemProp="additionalName">DrSpaceman</span>
                <a href="mailto:mat.berti@gmail.com" itemProp="email">Matt Berti</a>
                <img src="static/img/mattberti.png" alt="Matt Berti" itemProp="image" />
            </div>
            <p>
                Hi I'm Matt, a <Link href="/developer">full stack web developer</Link>. I live in <a href="/china-expat">China</a> where I <Link href="/teacher">teach</Link> high school kids. I'm passionate about <Link href="/gamer">videogames</Link>, <Link href="/traveler">traveling</Link>, and <Link href="/history">history</Link>.
            </p>
            <dl className={styles.social}>
                <dt>Find Me</dt>
                <dd><a href="https://twitter.com/bahamatt64">@bahamatt64</a></dd>
                <dd><a href="https://www.linkedin.com/in/mrberti/">Linkedin</a></dd>
                <dd><a href="https://github.com/dr-spaceman">Github</a></dd>
                <dd><a href="https://steamcommunity.com/id/bahamatt/">Steam</a></dd>
            </dl>
        </Layout>
    )
}

export default HomePage