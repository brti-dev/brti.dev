import React from 'react'

import { Color } from 'interfaces/theme'
import classes from './badge.module.scss'

type BadgePropsBase = {
  children: React.ReactNode
  className?: string
  color?: Color
  max?: number
  showZero?: boolean
  size?: 'small' | 'medium' | 'large' | number
  variant?: 'default' | 'dot' | string
} & React.ComponentPropsWithoutRef<'span'>
type BadgePropsContent = BadgePropsBase & {
  content: string | number | null | React.ReactElement
}
type BadgePropsDot = BadgePropsBase & {
  content?: string | number | null | React.ReactElement
  variant: 'dot'
}

export type BadgeProps = BadgePropsContent | BadgePropsDot

function Badge(props: BadgeProps) {
  const {
    children,
    className,
    color = 'default',
    content,
    max,
    showZero = false,
    size = 'medium',
    variant = 'default',
    ...rest
  } = props

  const classNames = [
    'badge',
    classes.content,
    'variant--contained', // Access global colors
    `color--${color}`,
    'no-hover',
    classes[`variant--${variant}`],
    classes[`size--${size}`],
    className && className,
  ]

  let contentOutput = content
  if (typeof content === 'number' && max && max < content) {
    contentOutput = `${max}+`
  }

  let hidden = false
  if (content === 0 && !showZero) {
    classNames.push('visually-hidden')
    hidden = true
  }

  if (React.isValidElement(content)) {
    classNames.push(classes.componentAsBadge)
  }

  return (
    <span className={classes.container}>
      {children}
      <span className={classNames.join(' ')} {...rest} hidden={hidden}>
        {contentOutput}
      </span>
    </span>
  )
}

export default Badge
