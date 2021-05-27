import { useState, useCallback, createElement } from 'react'
import Alert from '@reach/alert'
import { BiError as ErrorIcon } from 'react-icons/bi'

type InitialState = null | string | Error

/**
 * Hook to manage alert state.
 *
 * @param initialState Initial state; If true-ish, the alert will display immediately
 *
 * @returns {array} Array
 * @returns {JSX.Element} Alert component to render
 * @returns {function} Function to set alert message
 */
function useAlert<S>(
    initialState: S | (() => S)
): [React.ComponentType, React.Dispatch<React.SetStateAction<S>>] {
    const [message, setMessage] = useState(initialState)

    const component = useCallback(() => {
        const isError = message instanceof Error

        if (!message) return null

        return (
            <Alert
                hidden={!message}
                className={`alert${isError ? ' alert__error' : ''}`}
            >
                {isError && <ErrorIcon />}
                {message && <span>{message.toString()}</span>}
            </Alert>
        )
    }, [message])

    return [component, setMessage]
}

export default useAlert
