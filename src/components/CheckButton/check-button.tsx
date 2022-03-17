import { memo, forwardRef } from 'react'

import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import classnames from 'lib/classnames'
import classes from './check-button.module.scss'

export type CheckButtonProps = {
  name: string
  children: React.ReactNode
  value: string
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  loading?: boolean
  onChange?: (value: boolean) => void
}

const CheckButton = forwardRef<HTMLLabelElement, CheckButtonProps>(
  (props, ref) => {
    const {
      name,
      value,
      checked,
      disabled,
      loading,
      id: naturalId,
      className,
      onChange = () => {},
      children,
      ...rest
    } = props
    const id = naturalId || `checkButton__${name}__${value}`

    const toggleChecked = () => onChange(!checked)

    return (
      <div className={classnames(className, classes.checkButton)} {...rest}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled || loading}
          id={id}
          className="visually-hidden"
          onChange={toggleChecked}
        />
        <label
          htmlFor={id}
          className={classnames(
            'button variant--outlined',
            (disabled || loading) && 'disabled',
            checked && 'checked'
          )}
          data-loading={loading && 'true'}
          ref={ref}
        >
          <span className="text-content">{children}</span>
        </label>
      </div>
    )
  }
)

export type CheckButtonGroupProps = OverloadedElementProps & {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const CheckButtonGroup: OverloadedElement<CheckButtonGroupProps> = (
  props: CheckButtonGroupProps
) => {
  const {
    as: Component = 'div',
    className,
    orientation = 'horizontal',
    ...rest
  } = props

  const classNames = [className, classes.container]
  if (orientation === 'vertical') {
    classNames.push(classes.containerVertical)
  }
  const classNameString = classNames.filter(cn => !!cn).join(' ')

  return <Component className={classNameString} {...rest} />
}

export default memo(CheckButton)
