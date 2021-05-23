/* eslint-disable prefer-template */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiArrowToTop as ArrowTopIcon } from 'react-icons/bi'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import scrollToTop from '@/lib/scroll-to-top'
import IconButton from './IconButton'
import Button from './Button'
import Overlay from './Overlay'

export const siteTitle = 'Matt Berti'

const PAGES = [
    { link: '/', title: 'someone' },
    { link: '/developer', title: 'web developer' },
    { link: '/teacher', title: 'teacher' },
    { link: '/blog', title: 'blogger' },
]

// pathname-alias for source code link (@github)
const ALIASES = {
    '/developer': '/developer/index.js',
    '/blog': '/blog/index.js',
}

const REPOSITORY_ROOT =
    'https://github.com/dr-spaceman/mattberti.com/tree/master'

function getSourceLink(pathname: string, query: any): string {
    if (pathname === '/blog/[slug]') {
        return `${REPOSITORY_ROOT}/posts/${query.slug}.md`
    }

    return `${REPOSITORY_ROOT}/pages` + (ALIASES[pathname] ?? `${pathname}.js`)
}
function getPageTitle(pathname: string) {
    const foundPage = PAGES.find(page => page.link === pathname)
    if (!foundPage || !foundPage.title) return '[unknown page]'

    return foundPage.title
}

/**
 * Wrapper component to render header, footer, and other layout components
 */
export default function Layout({ title = null, children }) {
    const { pathname, query } = useRouter()
    const pathnameRoot = pathname.split('/', 2).join('/')

    const [nav, setNav] = useState({ opened: false })
    const toggleNav = () => setNav({ opened: !nav.opened })

    const currentPageIndex = PAGES.findIndex(page => page.link === pathnameRoot)
    const isHome = pathname === '/'
    const isCurrentPage = (link: string) => link === pathnameRoot
    const sourceLink = getSourceLink(pathname, query)

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>
                    Matt Berti
                    {title
                        ? `, ${title}`
                        : ', full stack developer and history teacher'}
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <SkipNavLink />
            <header id="top">
                <picture>
                    <source srcSet="/img/mattberti.webp" type="image/webp" />
                    <img
                        src="/img/mattberti.png"
                        alt="Matt Berti"
                        width={136}
                        height={136}
                    />
                </picture>
                <h1>Matt Berti</h1>
                <nav
                    id="header-nav"
                    data-opened={nav.opened}
                    style={
                        {
                            '--current-index': currentPageIndex,
                        } as React.CSSProperties
                    }
                >
                    <Button
                        variant="contained"
                        className="nav-item"
                        onClick={toggleNav}
                    >
                        {getPageTitle(pathnameRoot)}
                        <div className="arrow" />
                    </Button>
                    <div className="container" hidden={!nav.opened}>
                        <ul>
                            {PAGES.map(({ link, title: pageTitle }) => (
                                <li
                                    key={link}
                                    className={
                                        isCurrentPage(link)
                                            ? 'current'
                                            : undefined
                                    }
                                >
                                    <Link href={link}>
                                        <a className="nav-item unstyled">
                                            {pageTitle}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <Overlay opened={nav.opened} onClose={toggleNav} />
            </header>
            <SkipNavContent />
            <main>{children}</main>
            {!isHome && (
                <footer>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Matt Berti</Link>
                            </li>
                            <li>
                                <Link href="/developer">
                                    <a title="Matt Berti, Web Developer">
                                        Work
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a title="Matt Berti Blog">Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:me@mattberti.com">
                                    Email
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={sourceLink}
                                    title="View or edit the source code for this page"
                                    className="sourcecode"
                                >
                                    🔎
                                    <span>source code</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <IconButton id="scroll-top" onClick={scrollToTop}>
                        <ArrowTopIcon />
                    </IconButton>
                </footer>
            )}
        </>
    )
}
