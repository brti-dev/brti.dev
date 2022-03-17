import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { Severity, Variant } from 'interfaces/theme'
import { reducer } from 'lib/use-alert'
import { render, screen } from '../../../test-utils'
import Alert, { AlertDispatch } from 'components/Alert'
import Button from 'components/Button'
import { AlertHook } from '../../../pages/components/alert'

const SEVERITY = ['error', 'warning', 'info', 'success']

describe('useAlert hook', () => {
  const initialState: AlertDispatch = {
    label: 'foo',
    message: 'lorem',
    severity: 'info',
  }

  test('should set up reducer', () => {
    expect(reducer(null, initialState)).toEqual(initialState)
  })

  test('alert appears and disappears', () => {
    render(<AlertHook />)

    const alertBtn = screen.getByText('Alert')
    const dismissBtn = screen.getByText('Dismiss')

    expect(alertBtn).toBeInTheDocument()
    expect(dismissBtn).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument() // Query will return node OR null; It will never throw

    userEvent.click(alertBtn)
    expect(screen.queryByRole('alert')).toBeInTheDocument()

    userEvent.click(dismissBtn)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})

test('should render correctly', () => {
  const tree = renderer
    .create(
      <Alert severity="error" action={<b>Action</b>}>
        Alert
      </Alert>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should work with different variants', () => {
  const tree = renderer
    .create(
      <>
        {['default', 'outlined', 'contained'].map((variant: Variant) => (
          <Alert variant={variant} key={variant}>
            {variant}
          </Alert>
        ))}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('has the proper `severity` attributes', () => {
  const severity = SEVERITY[0]
  const { getByRole, rerender } = render(
    <Alert severity={severity as Severity} label="Alert">
      Foo
    </Alert>
  )
  expect(getByRole('alert')).toHaveAttribute('data-severity', severity)

  SEVERITY.slice(1).forEach((severity: Severity, index) => {
    rerender(<Alert severity={severity}>alert</Alert>)
    expect(getByRole('alert')).toHaveAttribute('data-severity', severity)
  })
})

test('should output a message using the `message` prop', () => {
  const { getByText } = render(<Alert message="WARNING!" />)
  expect(getByText('WARNING!')).toBeInTheDocument()
})

test('should output a message using the `children` prop', () => {
  const { getByText } = render(<Alert>WARNING!</Alert>)
  expect(getByText('WARNING!')).toBeInTheDocument()
})

test('should include a call to action with the `action` prop', () => {
  const { getByRole } = render(
    <Alert message="Alert" action={<Button>Act</Button>} />
  )
  expect(getByRole('button')).toBeInTheDocument()
})

test('should dismiss', () => {
  const { getByRole } = render(<Alert dismiss>Alert</Alert>)

  const btn = getByRole('button')
  expect(btn).toBeInTheDocument()
  userEvent.click(btn)
  expect(btn).not.toBeVisible()
})
