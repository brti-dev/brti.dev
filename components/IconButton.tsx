import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'
import { ReactHTMLElement } from 'react';

import Button, { ButtonProps } from './Button'

export type IconButtonProps = ButtonProps & {
    tooltip?: string
}

function IconButton({ children, ...rest }: any) {
    return (
        <Button variant="icon" {...rest}>
            {children}
        </Button>
    );
}

function CustomIconButton({ tooltip, ...rest }: IconButtonProps) {
    return (<>
        {tooltip
            ? (
                <Tooltip label={tooltip}>
                    <IconButton aria-label={tooltip} {...rest} />
                </Tooltip>
            )
            : <IconButton {...rest} />}
    </>)
}
export default CustomIconButton
