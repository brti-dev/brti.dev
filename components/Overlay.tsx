import React, { MouseEventHandler } from 'react'

export type OverlayProps = {
    opened: boolean
    onClose: any
} & React.HTMLAttributes<HTMLDivElement>

function Overlay({
    opened = false,
    onClose,
}: OverlayProps) {
    return (
        <div
            className="overlay"
            role="button"
            hidden={!opened}
            onClick={onClose}
            aria-hidden={!opened}
            aria-label="close"
        />
    )
}

export default Overlay
