import { cloneElement } from 'react'

import classes from './form.module.scss'

export type FormGroupProps = {
  label: string
  input: React.ReactElement<HTMLInputElement>
  className?: string
  error?: boolean
  helperText?: string
} & React.ComponentPropsWithoutRef<'div'>

export function FormGroup({
  label,
  input,
  className = null,
  error = false,
  helperText = null,
}: FormGroupProps) {
  const classNames = [classes.formGroup, className]
  if (error) classNames.push(classes.error)
  const classNameString = classNames.filter(i => !!i).join(' ')
  const id = `form__${label.replace(/[\s_]+/g, '-').toLowerCase()}`

  return (
    <div className={classNameString}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(input, { id })}
      {helperText && <div role="note">{helperText}</div>}
    </div>
  )
}
