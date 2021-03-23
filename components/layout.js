/* eslint-disable prefer-template */
import Head from 'next/head'
import Link from 'next/link'
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

// pathname-alias for source code link (@github)
const ALIASES = {
    '/developer': '/developer/index.js',
    '/blog': '/blog/index.js',
}

const REPOSITORY_ROOT = 'https://github.com/dr-spaceman/mattberti.com/tree/master';

function getSource(pathname, query) {
    if (pathname === '/blog/[slug]') {
        return `${REPOSITORY_ROOT}/posts/${query.slug}.md`
    }

    return `${REPOSITORY_ROOT}/pages` + (ALIASES[pathname] ?? `${pathname}.js`)
}

function asHref(link) {
    return `/${link}`
}

export const siteTitle = 'Matt Berti'

/**
 * Wrapper component to render header, footer, and other layout components
 *
 * @param {Object} props
 * @param {string=} props.title Page title
 * @param {JSX.Element[]} props.children Main content
 *
 * @returns {JSX.Element}
 */
export default function Layout({ children, title }) {
    const { pathname, query } = useRouter()

    const isHome = pathname === '/'
    const isCurrentPage = link => asHref(link) === pathname
    const sourceLink = getSource(pathname, query)

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
                        {PAGES.map(({ link, title: pageTitle }) => (
                            <li key={link} className={isCurrentPage(link) ? 'current' : ''}>
                                <Link href={asHref(link)}>{pageTitle}</Link>
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
