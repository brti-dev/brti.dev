import React from 'react'

function Overlay({
    opened = false,
    onClose = null,
}) {
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
