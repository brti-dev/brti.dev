/* eslint-disable prefer-template */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiArrowToTop as ArrowTopIcon, BiChevronDown as ArrowDownIcon } from 'react-icons/bi'
import { BsChevronExpand as ExpandIcon } from 'react-icons/bs'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@reach/disclosure'
import VisuallyHidden from '@reach/visually-hidden'

import scrollToTop from '../lib/scroll-to-top'
import IconButton from './IconButton'
import Button from './Button'

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

const REPOSITORY_ROOT = 'https://github.com/dr-spaceman/mattberti.com/tree/master'

function getSourceLink(pathname, query) {
    if (pathname === '/blog/[slug]') {
        return `${REPOSITORY_ROOT}/posts/${query.slug}.md`
    }

    return `${REPOSITORY_ROOT}/pages` + (ALIASES[pathname] ?? `${pathname}.js`)
}
function getPageTitle(pathname) {
    const foundPage = PAGES.find(page => page.link === pathname)
    if (!foundPage || !foundPage.title) return '[unknown page]'

    return foundPage.title
}

/**
 * Wrapper component to render header, footer, and other layout components
 *
 * @param {Object} props
 * @param {string=} props.title Page title
 * @param {JSX.Element|JSX.Element[]} props.children Main content
 *
 * @returns {JSX.Element}
 */
export default function Layout({ children, title }) {
    const { pathname, query } = useRouter()
    const pathnameRoot = pathname.split('/', 2).join('/')

    const [nav, setNav] = useState({ opened: false })
    const toggleNav = () => setNav({ opened: !nav.opened })

    const currentPageIndex = PAGES.findIndex(page => page.link === pathnameRoot)
    const isHome = pathname === '/'
    const isCurrentPage = link => link === pathnameRoot
    const sourceLink = getSourceLink(pathname, query)

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
            <SkipNavLink />
            <header id="top">
                <h1>Matt Berti</h1>
                <nav
                    id="header-nav"
                    data-opened={nav.opened}
                    style={{ '--t': `calc(2.3rem * -${currentPageIndex})` }}
                >
                    <Button variant="contained" className="nav-item" onClick={toggleNav}>
                        {getPageTitle(pathnameRoot)}
                        <ExpandIcon className="arrow" />
                    </Button>
                    <div className="container" hidden={!nav.opened}>
                        <ul>
                            {PAGES.map(({ link, title: pageTitle }) => (
                                <li key={link}>
                                    {isCurrentPage(link)
                                        ? (
                                            <Button className="nav-item" onClick={toggleNav}>
                                                {pageTitle}
                                                <ExpandIcon className="arrow" />
                                            </Button>
                                        ) : (
                                            <Link href={link}>
                                                <a className="nav-item unstyled">{pageTitle}</a>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <picture>
                    <source srcSet="/img/mattberti.webp" type="image/webp" />
                    <img src="/img/mattberti.png" alt="Matt Berti" width={isHome ? 144 : 64} height={isHome ? 144 : 64} />
                </picture>
            </header>
            <SkipNavContent />
            <main>{children}<Button>Fuuuuuu</Button></main>
            {!isHome && (
                <footer>
                    <ul>
                        <li><Link href="/">Matt Berti</Link></li>
                        <li><Link href="/developer"><a title="Matt Berti, Web Developer">Work</a></Link></li>
                        <li><Link href="/blog"><a title="Matt Berti Blog">Blog</a></Link></li>
                        <li><Link href="mailto:me@mattberti.com">Email</Link></li>
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
                    <IconButton id="scroll-top" onClick={scrollToTop}>
                        <ArrowTopIcon />
                    </IconButton>
                </footer>
            )}
        </>
    )
}
