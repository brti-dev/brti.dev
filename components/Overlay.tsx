import React, { MouseEventHandler } from 'react'

type CloseFunction = (a: MouseEventHandler<HTMLDivElement>) => void
export type OverlayProps = {
    opened: boolean
    onClose: CloseFunction
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
