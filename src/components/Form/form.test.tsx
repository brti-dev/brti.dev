import '@testing-library/jest-dom'

import { getByPlaceholderText, render, screen } from '../../../test-utils'
import { Form, FormGroup, TextInput } from '.'

test('renders a form and label with text input', () => {
  const label = 'foo'
  const { getByTestId, getByLabelText } = render(
    <Form data-testid="form">
      <FormGroup label={label} input={<input type="text" />} />
    </Form>
  )

  expect(getByTestId('form')).toBeInTheDocument()
  expect(getByLabelText(label)).toBeInTheDocument()
})

test('form group has helper text', () => {
  const note = 'foo'
  const label = 'bar'
  const { getByText } = render(
    <FormGroup
      label={label}
      input={<TextInput name={label} />}
      helperText={note}
    />
  )

  expect(getByText(note)).toBeInTheDocument()
})

test('text input has the proper `type` attribute', () => {
  const { getByRole, getByPlaceholderText, rerender } = render(
    <TextInput name="text-input" />
  )

  expect(getByRole('textbox')).toHaveAttribute('type', 'text')

  const placeholder = 'My Number'
  rerender(
    <TextInput type="number" name="number-input" placeholder={placeholder} />
  )

  expect(getByPlaceholderText(placeholder)).toHaveAttribute('type', 'number')
})

test('text input renders a textarea when appropriate', () => {
  const placeholder = 'placeholder'
  const { container } = render(
    <TextInput
      name="multirow"
      multiline={true}
      rows={2}
      placeholder={placeholder}
    />
  )

  expect(container.querySelector('input')).not.toBeInTheDocument()
  expect(container.querySelector('textarea')).toHaveAttribute('rows', '2')
})
