import React from 'react'
import PropTypes from 'prop-types'

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
            <a
                href={to}
                className={`button variant-${variant} color-${color} size-${size} ${className}`}
                {...rest}
            >
                {children}
            </a>
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
Button.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'red', 'green', 'dark', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'link', 'icon', 'close']),
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node,
}

export default Button
