import classes from './form.module.scss'

export type FormProps = {
  children: React.ReactChild | React.ReactChild[]
  className?: string
} & React.ComponentPropsWithoutRef<'form'>

export function Form({ children, className = null, ...rest }: FormProps) {
  const classNameString = [classes.form, className].filter(i => !!i).join(' ')

  return (
    <form className={classNameString} {...rest}>
      {children}
    </form>
  )
}
