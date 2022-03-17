/* eslint-disable prefer-template */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  BiArrowToTop as ArrowTopIcon,
  BiMenu as MenuIcon,
} from 'react-icons/bi'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import config from '../../../package.json'
import scrollToTop from 'lib/scroll-to-top'
import useMediaQuery from 'lib/use-media-query'
import { IconButton } from 'components/Button'
import classes from './layout.module.scss'

const { pages, siteTitle } = config

type OptionalChildren = {
  children?: React.ReactChild | React.ReactChild[]
}

type RequiredChildren = {
  children: React.ReactChild | React.ReactChild[]
}

export type LayoutProps = {
  title?: string
} & RequiredChildren

export function Header({ children }: OptionalChildren) {
  const { pathname, query } = useRouter()
  const pathnameRoot = pathname.split('/', 2).join('/')

  const isCurrentPage = (link: string) => link === pathnameRoot

  const isScreenMobile = useMediaQuery('(max-width: 680px)')

  const currentPageIndex = pages.findIndex(page => page.link === pathnameRoot)

  const [menu, setMenu] = useState(isScreenMobile)
  const handleOpenMenu = () => setMenu(!menu)

  return (
    <header id="top" className={classes.header}>
      <div className="heading">
        <h1>{siteTitle}</h1>
        {isScreenMobile && (
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <nav
        style={
          {
            display: menu || !isScreenMobile ? 'block' : 'none',
            '--current-index': currentPageIndex,
          } as React.CSSProperties
        }
        aria-label="Main"
      >
        <ul>
          {pages.map(({ link, title: pageTitle }) => (
            <li
              key={link}
              className={isCurrentPage(link) ? 'current' : undefined}
            >
              <Link href={link}>{pageTitle}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </header>
  )
}

export function Main({ children }: RequiredChildren) {
  return <main className={classes.main}>{children}</main>
}

export function Footer({ children }: OptionalChildren) {
  return (
    <footer className={classes.footer}>
      <nav aria-label="Footer">
        <ul>
          {pages.map(({ link, title: pageTitle }) => (
            <li key={link}>
              <Link href={link}>{pageTitle}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton className={classes.scrollToTop} onClick={scrollToTop}>
        <ArrowTopIcon />
      </IconButton>
      {children}
    </footer>
  )
}

export default function Layout({ title = siteTitle, children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
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
      <Header />
      <SkipNavContent />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
