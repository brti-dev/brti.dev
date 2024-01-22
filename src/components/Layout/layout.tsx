import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import {
  ArrowTopIcon,
  Button,
  Link,
  Overlay,
  Tooltip,
  VisuallyHidden,
} from 'matterial'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import {
  ALIASES,
  BIO,
  EMAIL,
  PAGES,
  REPOSITORY_ROOT,
  TITLE,
} from 'lib/constants'
import scrollToTop from 'lib/scroll-to-top'
import NavLink from 'components/NavLink'

const IMG_DIR = '/img'

export type LayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

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
export default function Layout({ title, description, children }: LayoutProps) {
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
          {TITLE}
          {`, ${title || BIO}`}
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
        <meta property="og:title" content={TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SkipNavLink />
      <header id="top">
        <div className="header__thumbnail">
          <div
            id="header-thumbnail-container"
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
                <img src={`${IMG_DIR}/${page.imgSrcFallback}`} alt={TITLE} />
              </picture>
            ))}
          </div>
        </div>
        <div className="header__wrapper">
          <h1>{TITLE}</h1>
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
        </div>
        <Overlay active={nav.opened} onClose={toggleNav} />
      </header>
      <SkipNavContent />
      <main>{children}</main>
      {!isHome && (
        <footer>
          <nav>
            <ul>
              {PAGES.map(page => (
                <li key={page.title}>
                  <NextLink href={page.link}>
                    <a title={`${TITLE}, ${page.title}`}>{page.title}</a>
                  </NextLink>
                </li>
              ))}
              <li>
                <Tooltip label="View source code">
                  <Button
                    to={sourceLink}
                    shape="circle"
                    title="View or edit the source code for this page"
                    className="sourcecode"
                    style={{ fontSize: '1em' }}
                  >
                    🔎
                    <VisuallyHidden>source code</VisuallyHidden>
                  </Button>
                </Tooltip>
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
