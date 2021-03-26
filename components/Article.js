import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import classes from '../styles/article.module.scss'
import Date from './Date'

/**
 * Render an article. A header will be built based on props passed, or include a custom header in
 * the content.
 *
 * @param {object} props
 * @param {string=} props.title Title of the article
 * @param {string=} props.description Description of the article
 * @param {string|JSX.Element=} props.preface A string or JSX compoent with preface information
 * @param {string=} props.dateString Date of the article
 * @param {JSX.Element|JSX.Element[]} props.children Article body
 * @param {...object=} props.rest Other props to pass to the root element
 *
 * @returns Rendered article
 */
export default function Article({
    title,
    description,
    preface,
    dateString,
    children,
    ...rest
}) {
    let header
    let hasHeader = false

    if (children) {
        // Check for <header> in children
        React.Children.forEach(children, child => {
            if (child && child.type === 'header') {
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

/**
 * Helper component to render the content of an article. Userful for rendering static HTML, eg.
 * from parsed Markdown.
 *
 * @param {Object} props
 * @param {string=} props.htmlContent Static HTML to set as article content; Uses React's
 * `dangerouslySetInnerHTML` inside an additional <div> element
 * @param {JSX.Element|JSX.Element[]} [props.children] Article body
 *
 * @returns {JSX.Element}
 *
 * @note This component is merely a solution to render static HTML in React. Once we can
 * dangerouslySetInnerHTML to a fragment, this component can be removed or updated.
 * @see https://github.com/facebook/react/issues/12014
 * @see https://github.com/reactjs/rfcs/pull/129
 */
export function ArticleContent({ htmlContent, children }) {
    if (htmlContent) {
        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    return children
}
