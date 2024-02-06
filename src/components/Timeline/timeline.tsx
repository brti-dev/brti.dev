import React from 'react'
import classes from './timeline.module.scss'

export const Timeline = ({
  color = 'var(--color-comment)',
  children,
  ...rest
}) => (
  <div
    className={classes.timeline}
    style={{ '--timeline-color': color } as React.CSSProperties}
    {...rest}
  >
    <dl>{children}</dl>
  </div>
)

export const TimelineItem = ({ label, children }) => (
  <>
    {label && <dt>{label}</dt>}
    <dd>{children}</dd>
  </>
)
