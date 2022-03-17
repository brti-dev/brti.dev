import { useCallback, useReducer } from 'react'

import Alert, { AlertDispatch } from 'components/Alert'

export function reducer(
  state: null | AlertDispatch,
  action: null | string | AlertDispatch
): null | AlertDispatch {
  if (typeof action === 'string') {
    return { message: action }
  }

  if (action == null) {
    return { message: null }
  }

  return action
}

/**
 * Hook to manage alert state.
 *
 * @param initialState Initial state; If true-ish, the alert will display immediately
 *
 * @returns {array} Array
 * @returns {JSX.Element} Alert component to render
 * @returns {function} Function to set alert message
 */
function useAlert(
  initialState?: string | AlertDispatch
): [React.ComponentType, any] {
  const [alert, setAlert] = useReducer(reducer, reducer(null, initialState))

  const component = useCallback(() => {
    if (!alert.message) return null

    return <Alert {...{ ...alert }} />
  }, [alert])

  return [component, setAlert]
}

export default useAlert
