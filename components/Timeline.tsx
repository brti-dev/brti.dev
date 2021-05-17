import React from 'react'

export const Timeline = ({ color = 'var(--color-comment)', children, ...rest }) => (
    <div
        className="timeline"
        style={{ '--color': color } as React.CSSProperties}
        {...rest}
    >
        <ul>
            {children}
        </ul>
    </div>
)

export const TimelineItem = ({ label, children }) => (
    <li>
        {children}
        <label>{label}</label>
    </li>
)
