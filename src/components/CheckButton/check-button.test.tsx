import '@testing-library/jest-dom'

import { render, screen } from '../../../test-utils'
import CheckButton, { CheckButtonGroup } from '.'
import userEvent from '@testing-library/user-event'

const CheckButtons = ({ checked, setChecked = () => {} }: any) => (
  <>
    <CheckButton
      name="daddy"
      value="true"
      checked={checked == 'daddy'}
      onChange={() => setChecked('daddy')}
    >
      I'm a daddy
    </CheckButton>
    <CheckButton
      name="has_boat"
      value="true"
      checked={checked == 'has_boat'}
      onChange={() => setChecked('has_boat')}
    >
      I have a boat
    </CheckButton>
  </>
)

test('should render group vertically', () => {
  const id = 'check-button-group'

  const { getByTestId } = render(
    <CheckButtonGroup orientation="vertical" data-testid={id}>
      <CheckButtons />
    </CheckButtonGroup>
  )

  expect(getByTestId(id)).toHaveClass('containerVertical')
})

test('should render group as an overloaded element', () => {
  const id = 'check-button-group'
  const Row = ({ id }: { id: string }) => (
    <span data-testid={id} className="foo" />
  )

  const { getByTestId } = render(
    <CheckButtonGroup className="bar" as={Row} id={id}>
      <CheckButtons />
    </CheckButtonGroup>
  )

  expect(getByTestId(id)).toHaveClass('foo')
})

test('should be checked when set as `checked`', () => {
  const { getAllByRole } = render(
    <CheckButtonGroup>
      <CheckButtons checked="daddy" />
    </CheckButtonGroup>
  )

  const checkBox = getAllByRole('checkbox')[0]
  expect(checkBox).toBeChecked()
})

test('should execute callback when clicked', () => {
  let checked = false
  render(
    <CheckButtonGroup>
      <CheckButtons setChecked={() => (checked = true)} />
    </CheckButtonGroup>
  )

  userEvent.click(screen.getByText("I'm a daddy"))
  expect(checked).toBeTruthy()
})
