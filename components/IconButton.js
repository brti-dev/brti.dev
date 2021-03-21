import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'
import Button from './Button'

function IconButton({ children, ...rest }) {
    return (
        <Button variant="icon" {...rest}>
            {children}
        </Button>
    );
}

function CustomIconButton({ tooltip, ...rest }) {
    return (
        <>
            {tooltip
                ? (
                    <Tooltip title={tooltip}>
                        <IconButton aria-label={tooltip} {...rest} />
                    </Tooltip>
                )
                : <IconButton {...rest} />}
        </>
    )
}
export default CustomIconButton
