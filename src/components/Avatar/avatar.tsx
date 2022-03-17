import * as React from 'react'

import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import { Color } from 'interfaces/theme'
import Tooltip from 'components/Tooltip'
import classes from './avatar.module.scss'

export type AvatarProps = {
  alt: string
  children?: React.ReactNode
  className?: string
  color?: Color
  size?: number
  src?: string
  tooltip?: string | boolean
} & OverloadedElementProps

const TooltipWrapper = ({ tooltipLabel, children }) =>
  tooltipLabel ? <Tooltip label={tooltipLabel}>{children}</Tooltip> : children

const Avatar: OverloadedElement<AvatarProps> = React.forwardRef<
  HTMLDivElement,
  AvatarProps
>((props, ref) => {
  const {
    alt,
    children,
    className,
    color = 'default',
    as: Component = 'div',
    size = 40,
    src,
    tooltip,
    ...rest
  } = props

  const classNames = [
    classes.avatar,
    'variant--contained', // Access global colors
    `color--${color}`,
    'no-hover',
    className && className,
  ]

  let tooltipLabel: string
  if (!!tooltip) {
    if (tooltip === true && alt) {
      tooltipLabel = alt
    } else if (typeof tooltip === 'string') {
      tooltipLabel = tooltip as string
    }
  }

  const finalProps = {
    className: classNames.join(' '),
    style: { '--size': `${size}px` } as React.CSSProperties,
    ref,
    role: 'img',
    'aria-label': alt !== children ? alt : undefined,
    ...rest,
  }

  return (
    <TooltipWrapper tooltipLabel={tooltipLabel}>
      <Component {...finalProps}>
        {src ? <img src={src} alt={alt} /> : children}
      </Component>
    </TooltipWrapper>
  )
})

export default Avatar
