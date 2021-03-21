import Link from 'next/link'
import Head from 'next/head'
import { BiArrowToTop as ArrowTopIcon } from 'react-icons/bi'

import scrollToTop from '../lib/scroll-to-top'
import IconButton from './IconButton'

export const siteTitle = 'Matt Berti'

export default function Layout({ children, title, home = false }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Matt Berti
                    {title ? `, ${title}` : ', full stack developer and history teacher'}
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header id="top">
                <h1>Matt Berti</h1>
                <picture>
                    <source srcSet="/img/mattberti.webp" type="image/webp" />
                    <img src="/img/mattberti.png" alt="Matt Berti" width={home ? 144 : 64} height={home ? 144 : 64} />
                </picture>
                <nav>
                    <ul>
                        <li><Link href="/developer">Web Developer</Link></li>
                        <li><Link href="/teacher">Teacher</Link></li>
                        <li><Link href="/gamer">Gamer</Link></li>
                        <li><Link href="/china-expat">Expat in China</Link></li>
                        <li><Link href="/traveler">Traveler</Link></li>
                        <li><Link href="/history-buff">Amateur Historian</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            {!home && (
                <footer>
                    <ul>
                        <li><Link href="/">Matt Berti</Link></li>
                        <li><Link href="/developer" title="Matt Berti, Web Developer">My Work</Link></li>
                        <li><Link href="/blog" title="Matt Berti Blog">Blog</Link></li>
                        <li><Link href="mailto:me@mattberti.com">E-mail</Link></li>
                    </ul>
                    <IconButton id="scroll-top" onClick={scrollToTop}>
                        <ArrowTopIcon />
                    </IconButton>
                </footer>
            )}
        </>
    )
}
