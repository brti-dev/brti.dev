import React from 'react'

export const Timeline = ({ children, ...rest }) => (
    <div className="timeline" {...rest}>
        {children}
    </div>
)

export const TimelineItem = () => (
    <div className="timeline__item"></div>
)
