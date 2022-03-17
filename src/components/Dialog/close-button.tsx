import classnames from 'lib/classnames'
import VisuallyHidden from 'components/VisuallyHidden'
import Button, { ButtonProps } from 'components/Button'

export function CloseButton({
  className,
  onClick,
  size = 'large',
  ...props
}: Omit<ButtonProps, 'children'> & { onClick: () => void }) {
  return (
    <Button
      className={classnames('button__close', className)}
      shape="circle"
      size={size}
      onClick={onClick}
      {...props}
    >
      <VisuallyHidden>Close</VisuallyHidden>
      <span aria-hidden>×</span>
    </Button>
  )
}
