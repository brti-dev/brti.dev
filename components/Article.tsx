import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt as ArrowRightIcon } from 'react-icons/bi'

import classes from '@/styles/article.module.scss'
import Date from '@/components/Date'

type ArticleProps = {
    title?: string
    description?: string | React.ReactElement
    preface?: string | React.ReactElement
    date?: string | Date
    nextArticle?: React.ReactElement
    children: React.ReactElement | React.ReactElement[]
}

/**
 * Render an article. A header will be built based on props passed, or include a custom header in
 * the content.
 */
export default function Article({
    title,
    description,
    preface,
    date,
    nextArticle,
    children,
    ...rest
}: ArticleProps) {
    let header: React.ReactElement
    let hasHeader = false
    let next: React.ReactElement

    if (nextArticle) {
        // Dissect given <Link> or <a> component and rebuild it using original props
        next = (
            <section className={classes.next}>
                <Link href={nextArticle.props.href}>
                    <a {...nextArticle.props}>
                        <small className="text-label">Up Next</small>
                        <big>
                            <strong>{nextArticle.props.children}</strong>
                            <ArrowRightIcon className="arrow" />
                        </big>
                    </a>
                </Link>
            </section>
        )
    }

    if (children) {
        // Check for <header> in children
        React.Children.forEach(children, (child) => {
            if (child && child.type === 'header') {
                hasHeader = true
            }
        })
    }

    // Build header manually if not given
    if (!hasHeader) {
        header = (
            <header>
                {date && <Date date={date} />}
                <h1>{title}</h1>
                {description && <div className={classes.description}>{description}</div>}
                {preface && <div className={classes.preface}>{preface}</div>}
            </header>
        )
    }

    return (
        <article
            className={classes.root}
            {...rest}
        >
            {header}
            {children}
            {next}
        </article>
    )
}

type ArticleContentProps = {
    htmlContent?: string // Static HTML to set as article content; Uses React's `dangerouslySetInnerHTML` inside an additional <div> element
    children?: React.ReactElement // Article body
}

/**
 * Helper component to render the content of an article. Useful for rendering static HTML, eg.
 * from parsed Markdown.
 *
 * @note This component is merely a solution to render static HTML in React. Once we can
 * dangerouslySetInnerHTML to a fragment, this component can be removed or updated.
 * @see https://github.com/facebook/react/issues/12014
 * @see https://github.com/reactjs/rfcs/pull/129
 */
export function ArticleContent({ htmlContent, children }: ArticleContentProps) {
    if (htmlContent) {
        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    return children
}
