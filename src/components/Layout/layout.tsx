/* eslint-disable prefer-template */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import scrollToTop from 'lib/scroll-to-top'
import NavLink from 'components/NavLink'
import { ArrowTopIcon, Button, Overlay, VisuallyHidden, Link } from 'matterial'

export const SITE_TITLE = 'Matt Berti'
export const IMG_DIR = '/img'

export type LayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

/**
 * Object to build nav and help router
 *
 * @prop link Link to index
 * @prop title Label title that will be used on nav
 * @prop imgSrc An optimized, preferred image thumbnail in .webp format
 * @prop imgSrcFallback A fallback image in .png or .jpg format
 */
const PAGES = [
  {
    link: '/',
    title: 'someone',
    imgSrc: 'mattberti.webp',
    imgSrcFallback: 'mattberti.jpg',
  },
  {
    link: '/developer',
    title: 'web developer',
    imgSrc: 'mattberti-developer.webp',
    imgSrcFallback: 'mattberti-developer.png',
  },
  {
    link: '/teacher',
    title: 'teacher',
    imgSrc: 'mattberti-teacher.webp',
    imgSrcFallback: 'mattberti-teacher.png',
  },
  {
    link: '/blog',
    title: 'blogger',
    imgSrc: 'mattberti-blogger.webp',
    imgSrcFallback: 'mattberti-blogger.png',
  },
]

// pathname-alias for source code link (@github)
const ALIASES = {
  '/developer': '/developer/index.tsx',
  '/blog': '/blog/index.tsx',
}

const REPOSITORY_ROOT = 'https://github.com/dr-spaceman/mattberti.com/tree/main'

function getSourceLink(pathname: string, query: any): string {
  if (pathname === '/blog/[slug]') {
    return `${REPOSITORY_ROOT}/posts/${query.slug}.md`
  }

  return `${REPOSITORY_ROOT}/pages` + (ALIASES[pathname] ?? `${pathname}.tsx`)
}

function getPageTitle(pathname: string) {
  const foundPage = PAGES.find(page => page.link === pathname)
  if (!foundPage || !foundPage.title) return '[unknown page]'

  return foundPage.title
}

/**
 * Keyboard navigation a11y
 */
function keyboardNav(event: KeyboardEvent) {
  const activeEl = document.activeElement as HTMLElement
  let activeIndex = Number(activeEl.dataset.menuIndex)
  if (!activeIndex) {
    activeIndex = 0
  }
  let newActiveIndex: number
  const numListboxOptions =
    document.getElementById('header__nav__menu').childElementCount + 1 // Account for button

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      newActiveIndex = activeIndex + 1
      if (newActiveIndex >= numListboxOptions) {
        newActiveIndex = 0
      }
      break

    case 'ArrowUp':
      event.preventDefault()
      newActiveIndex = activeIndex - 1
      if (newActiveIndex < 0) {
        newActiveIndex = numListboxOptions - 1
      }
      break

    case 'Home':
      event.preventDefault()
      newActiveIndex = 0
      break

    case 'End':
      event.preventDefault()
      newActiveIndex = numListboxOptions - 1
      break

    case 'Tab':
    case 'Escape':
      event.preventDefault()
      document.getElementById('header__nav__trigger').click()
      break
  }

  if (!!isNaN(newActiveIndex)) {
    console.log('return')
    return
  }

  let focusEl = document.querySelectorAll(
    `[data-menu-index="${newActiveIndex}"]`
  )[0] as HTMLElement
  focusEl.tabIndex = 0
  focusEl.focus()
}

/**
 * Wrapper component to render header, footer, and other layout components
 */
export default function Layout({
  title = null,
  description = null,
  children,
}: LayoutProps) {
  const { pathname, query } = useRouter()
  const pathnameRoot = pathname.split('/', 2).join('/')

  const [nav, setNav] = useState({ opened: false })
  const toggleNav = () => setNav({ opened: !nav.opened })

  useEffect(() => {
    if (nav.opened) {
      document.addEventListener('keydown', keyboardNav)
    } else {
      document.removeEventListener('keydown', keyboardNav)
    }

    return () => document.removeEventListener('keydown', keyboardNav)
  }, [nav])

  const currentPageIndex = PAGES.findIndex(page => page.link === pathnameRoot)
  const isHome = pathname === '/'
  const isCurrentPage = (link: string) => link === pathnameRoot
  const sourceLink = getSourceLink(pathname, query)

  return (
    <>
      <Head>
        <title>
          Matt Berti
          {title
            ? `, ${title}`
            : ', full stack web developer and computer science teacher'}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        {description && (
          <meta
            name="description"
            content={description.replace(/(<([^>]+)>)/gi, '')}
          />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SkipNavLink />
      <header id="top">
        <div id="header-thumbnail">
          <div
            className="container"
            style={
              {
                '--yInitial': `calc(-${currentPageIndex} * var(--thumbnail-size))`,
                transform: `translateY(var(--yInitial))`,
              } as React.CSSProperties
            }
          >
            {PAGES.map(page => (
              <picture key={page.link}>
                <source
                  srcSet={`${IMG_DIR}/${page.imgSrc}`}
                  type="image/webp"
                />
                <img
                  src={`${IMG_DIR}/${page.imgSrcFallback}`}
                  alt="Matt Berti"
                />
              </picture>
            ))}
          </div>
        </div>
        <h1>Matt Berti</h1>
        <nav
          id="header__nav"
          data-opened={nav.opened}
          style={
            {
              '--current-index': currentPageIndex,
            } as React.CSSProperties
          }
        >
          <Button
            id="header__nav__trigger"
            variant="contained"
            className="nav-item"
            onClick={toggleNav}
            data-menu-index={0}
            aria-haspopup="menu"
            aria-controls="header__nav__menu"
            aria-expanded={nav.opened}
            append={<div className="arrow" />}
          >
            {getPageTitle(pathnameRoot)}
          </Button>
          <div className="container">
            <ul
              id="header__nav__menu"
              hidden={!nav.opened}
              role="menu"
              aria-label="site navigation"
            >
              {PAGES.map(({ link, title: pageTitle }, index) =>
                !isCurrentPage(link) ? (
                  <li key={link} role="menuitem">
                    <NavLink
                      href={link}
                      scroll={false}
                      navIndex={index}
                      className="nav-item unstyled"
                      tabIndex={-1}
                      data-menu-index={index + 1}
                    >
                      {pageTitle}
                    </NavLink>
                  </li>
                ) : (
                  <li key={link} hidden>
                    {pageTitle}
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
        <Overlay active={nav.opened} onClose={toggleNav} />
      </header>
      <SkipNavContent />
      <main>{children}</main>
      {!isHome && (
        <footer>
          <nav>
            <ul>
              <li>
                <NextLink href="/">
                  <a>Matt Berti</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/developer">
                  <a title="Matt Berti, Web Developer">Work</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/blog">
                  <Link title="Matt Berti Blog">Blog</Link>
                </NextLink>
              </li>
              <li>
                <NextLink href="mailto:me@mattberti.com">
                  <Link>Email</Link>
                </NextLink>
              </li>
              <li>
                <Button
                  to={sourceLink}
                  shape="circle"
                  title="View or edit the source code for this page"
                  className="sourcecode"
                >
                  🔎
                  <VisuallyHidden>source code</VisuallyHidden>
                </Button>
              </li>
            </ul>
          </nav>
          <Button
            id="scroll-top"
            onClick={scrollToTop}
            title="Scroll to top"
            shape="circle"
          >
            <VisuallyHidden>Scroll to top</VisuallyHidden>
            <ArrowTopIcon />
          </Button>
        </footer>
      )}
    </>
  )
}
