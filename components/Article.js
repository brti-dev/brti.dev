import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import classes from '../styles/article.module.scss'
import Date from './Date'

/**
 * Render an article. A header will be built based on props passed, or include a custom header in
 * the content.
 *
 * @param {Object} props
 * @param {string=} props.title Title of the article
 * @param {string=} props.description Description of the article
 * @param {string|JSX.Element=} props.preface A string or JSX compoent with preface information
 * @param {string=} props.dateString Date of the article
 * @param {JSX.Element=} props.header Header, built automatically if not given
 * @param {string=} props.content Article body to dangerously set; Replaces children
 * @param {JSX.Element[]=} props.children Article body
 * @param {...Object=} props.rest Other props to pass to the root element
 *
 * @returns Rendered article
 *
 * @note This component poses a series of challenges because React cannot render the HTML article
 * inside a fragment; An HTML element is needed to dangerouslySetInnerHTML, while the <article>
 * element and CSS require the article to be in the root element. Once we can dangerouslySet.. to
 * a fragment, this code can be cleaned up and most props can be removed in favor of children.
 */
export default function Article({
    title,
    description,
    preface,
    dateString,
    header,
    content,
    children,
    ...rest
}) {
    let hasHeader = !!header

    if (children) {
        // Check for <header> in children
        React.Children.forEach(children, child => {
            if (child.type === 'header') {
                hasHeader = true
            }
        })
    }

    // Build header manually if not given
    if (!hasHeader) {
        header = (
            <header>
                {dateString && <Date dateString={dateString} />}
                <h1>{title}</h1>
                {description && <div className={classes.description}>{description}</div>}
                {preface && <div className={classes.preface}>{preface}</div>}
            </header>
        )
    }

    if (content) {
        return (
            <article
                className={classes.root}
                {...rest}
                dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(header) + content }}
            />
        )
    }

    return (
        <article
            className={classes.root}
            {...rest}
        >
            {header}
            {children}
        </article>
    )
}
