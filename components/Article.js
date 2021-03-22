import React from 'react'
import classes from '../styles/article.module.scss'
import Date from './Date'

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
    // Check for <header> in children
    React.Children.forEach(children, child => {
        if (child.type === 'header') {
            hasHeader = true
        }
    })
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
        <article className={classes.root} {...rest}>
            {header}
            {children}
        </article>
    )
}
