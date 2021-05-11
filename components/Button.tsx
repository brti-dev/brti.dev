import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'red', 'green', 'dark', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf([
        'button',
        'reset',
        'submit',
    ]),
    variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'link', 'icon', 'close']),
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node,
}

function Button({
    type = 'button',
    variant = 'text',
    color = 'default',
    size = 'medium',
    className,
    to,
    children,
    ...rest
}) {
    if (to) {
        return (
            <Link href={to}>
                <a
                    className={`button variant-${variant} color-${color} size-${size} ${className}`}
                    {...rest}
                >
                    {children}
                </a>
            </Link>
        )
    }

    return (
        <button
            type={type}
            className={`variant-${variant} color-${color} size-${size} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.propTypes = propTypes

export default Button
