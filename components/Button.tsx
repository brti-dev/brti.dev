import React from 'react'
import Link from 'next/link'

export type ButtonProps = {
    type?: 'button' | 'reset' | 'submit'
    variant?: 'text' | 'contained' | 'outlined' | 'link' | 'icon' | 'close'
    color?: 'default' | 'primary' | 'secondary' | 'red' | 'green' | 'dark' | 'light'
    size?: 'small' | 'medium' | 'large'
    className?: string
    to?: string
    children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLAnchorElement>

function Button({
    type = 'button',
    variant = 'text',
    color = 'default',
    size = 'medium',
    className,
    to,
    children,
    ...rest
}: ButtonProps) {
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

export default Button
