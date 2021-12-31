import React from 'react'
import Link, { LinkProps } from 'next/link'

function flipThumb(index: number | null) {
    const yPos =
        index === null
            ? `var(--yInitial)`
            : `calc(-${index} * var(--thumbnail-size))`
    const el = document.querySelector(
        '#header-thumbnail .container'
    ) as HTMLElement
    el.style.transform = `translateY(${yPos})`
}

/**
 * Anchor relevant to main page nav, used for navigating to major indeces and
 * flipping the nav thumbnail in the header.
 *
 * @prop navIndex Index of the nav item at Layout component PAGES object
 * @prop href Anchor href
 * @prop scroll Next/Link scroll prop; If true keeps scroll position upon navigation
 */
function NavLink({
    navIndex,
    href,
    scroll = true,
    children,
    ...rest
}: { navIndex: number } & React.PropsWithChildren<LinkProps> &
    React.HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link href={href} scroll={scroll}>
            <a
                onMouseEnter={() => flipThumb(navIndex)}
                onMouseLeave={() => flipThumb(null)}
                {...rest}
            >
                {children}
            </a>
        </Link>
    )
}

export default NavLink
