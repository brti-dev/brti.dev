import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BiArrowToTop as ArrowTopIcon } from 'react-icons/bi'

import scrollToTop from '../lib/scroll-to-top'
import IconButton from './IconButton'

const PAGES = [
    { link: 'developer', title: 'Web Developer' },
    { link: 'teacher', title: 'Teacher' },
    { link: 'gamer', title: 'Gamer' },
    { link: 'china-expat', title: 'Expat in China' },
    { link: 'traveler', title: 'Traveler' },
    { link: 'history-buff', title: 'Amateur Historian' },
]

function asHref(link) {
    return `/${link}`
}

export const siteTitle = 'Matt Berti'

export default function Layout({ children, title }) {
    const { pathname } = useRouter()

    const isHome = pathname === '/'
    const isCurrentPage = link => asHref(link) === pathname

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
                    <img src="/img/mattberti.png" alt="Matt Berti" width={isHome ? 144 : 64} height={isHome ? 144 : 64} />
                </picture>
                <nav>
                    <ul>
                        {PAGES.map(({ link, title }) => (
                            <li key={link} className={isCurrentPage(link) ? 'current' : ''}>
                                <Link href={asHref(link)}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            {!isHome && (
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
