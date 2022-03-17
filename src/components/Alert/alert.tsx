import React, { useState } from 'react'
import ReachAlert from '@reach/alert'
import {
  BiErrorCircle as ErrorIcon,
  BiError as WarningIcon,
  BiCheckCircle as SuccessIcon,
  BiInfoCircle as InfoIcon,
} from 'react-icons/bi'

import { Severity, Variant } from 'interfaces/theme'
import classnames from 'lib/classnames'
import Button from 'components/Button'

const ICONS = {
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
  info: <InfoIcon />,
}

export type AlertDispatch = {
  // A short message to show
  message: string | null
  // A button or other call to action
  action?: string | React.ReactElement
  // Append an action to dismiss the alert; Overwritten by `action`
  dismiss?: boolean
  // Prefix a short phrase like "Critical Error" or "Warning"
  label?: string
  // Describes the type of alert
  severity?: Severity
  // Controls whether the assistive technology should read immediately ("assertive") or wait until the user is idle ("polite").
  type?: 'polite' | 'assertive'
  // Style variants
  variant?: Variant
}

export type AlertProps = Partial<AlertDispatch> & {
  children?: React.ReactNode
  className?: string
}

/**
 * Regenerate a React element with the prop `size` small
 */
function shrink(component: string | React.ReactElement) {
  if (React.isValidElement(component)) {
    return React.cloneElement(component, { size: 'small' })
  }

  return component
}

function Alert({
  action,
  children,
  className,
  dismiss = false,
  label,
  message: naturalMessage,
  severity,
  type,
  variant = 'outlined',
}: AlertProps) {
  const classNames = classnames(
    'alert',
    `variant--${variant}`,
    severity && `color--${severity}`,
    className
  )

  let [message, setMessage] = useState(children || naturalMessage)

  if (dismiss && !action) {
    action = (
      <Button
        variant="outlined"
        color={severity}
        onClick={() => setMessage(null)}
      >
        Dismiss
      </Button>
    )
  }

  if (!message) {
    return null
  }

  return (
    <ReachAlert
      className={classNames}
      type={type}
      role="alert"
      // aria-label={label || severity || 'alert'}
      data-severity={severity}
    >
      {severity && <Icon severity={severity} />}
      <div className="content">
        <div className="message">
          {label && <strong className="label">{label}: </strong>}
          {message}
        </div>
        {action && <div className="action">{shrink(action)}</div>}
      </div>
    </ReachAlert>
  )
}

const Icon = ({ severity }) =>
  ICONS[severity] && (
    <div className="icon" aria-hidden="true">
      {ICONS[severity]}
    </div>
  )

export default Alert
