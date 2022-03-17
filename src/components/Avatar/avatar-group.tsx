import * as React from 'react'

import Avatar from '.'
import classes from './avatar.module.scss'

export type AvatarGroupProps = {
  max?: number
  total?: number
  children: React.ReactNode
}

export const AvatarGroup = ({
  max,
  total,
  children: allChildren,
}: AvatarGroupProps) => {
  const children = React.Children.toArray(allChildren)
  const numChildren = children.length

  if (numChildren > max || numChildren < total) {
    const excess = max ? numChildren - max : total - numChildren
    const mapToIndex = max ?? numChildren
    const childrenOutput = children
      .map((child, i) => {
        if (i < mapToIndex) {
          return child
        } else {
          return null
        }
      })
      .filter(child => !!child)
      .reverse()
    childrenOutput.unshift(
      <Avatar
        alt={`There are ${excess} hidden avatars`}
        className={classes.excess}
        key="excess"
      >{`+${excess}`}</Avatar>
    )

    const classNames = [classes.group, classes.groupMax]

    return <div className={classNames.join(' ')}>{childrenOutput}</div>
  }

  return <div className={classes.group}>{children.reverse()}</div>
}
