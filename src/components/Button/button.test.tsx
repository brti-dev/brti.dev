import { useState } from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../../test-utils'
import { Variant, Color } from 'interfaces/theme'
import Button, { IconButton } from '.'

test('should render correctly', () => {
  const tree = renderer
    .create(
      <Button variant="contained" color="primary" size="small" width={50}>
        Button
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render icon button correctly', () => {
  const tree = renderer.create(<IconButton>icon</IconButton>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('should work with different variants', () => {
  const tree = renderer
    .create(
      <>
        {['default', 'outlined', 'contained'].map((variant: Variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should work with different colors', () => {
  const tree = renderer
    .create(
      <>
        {[
          'primary',
          'secondary',
          'error',
          'warning',
          'info',
          'success',
          'dark',
          'light',
        ].map((color: Color) => (
          <Button color={color} key={color}>
            {color}
          </Button>
        ))}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should work with different sizes', () => {
  const tree = renderer
    .create(
      <>
        {['small', 'medium', 'large'].map(
          (size: 'small' | 'medium' | 'large') => (
            <Button size={size} key={size}>
              {size}
            </Button>
          )
        )}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should work with different shapes', () => {
  const shapes = ['circle', 'square']
  const tree = renderer
    .create(
      <>
        {shapes.map((shape: 'circle' | 'square') => (
          <Button shape={shape} key={shape}>
            {shape}
          </Button>
        ))}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should trigger a callback onClick', () => {
  const ButtonComponent = () => {
    const [clicks, setClicks] = useState(0)
    return <Button onClick={() => setClicks(c => (c += 1))}>{clicks}</Button>
  }

  render(<ButtonComponent />)
  const btn = screen.getByRole('button')
  userEvent.click(btn)
  expect(screen.getByText('1')).toBeInTheDocument()
})

test('shows spinner & disabled if loading', () => {
  const { getByRole } = render(<Button loading>Loading</Button>)

  const expBtn = expect(getByRole('button'))
  expBtn.toHaveAttribute('data-loading')
  expBtn.toBeDisabled()
})

test('has the proper aria attributes', () => {
  const { rerender } = render(<Button>button</Button>)

  // button has role="button"
  let button = screen.getByRole('button')
  expect(button).not.toHaveAttribute('aria-disabled')

  // loading sets aria-disabled to true
  rerender(<Button loading>button</Button>)
  button = screen.getByRole('button')
  expect(button).toHaveAttribute('disabled')
})

test('has the proper `type` attribute', () => {
  const { getByRole, rerender } = render(<Button>button</Button>)

  expect(getByRole('button')).toHaveAttribute('type', 'button')

  rerender(
    <Button data-testid="btn" type="submit">
      button
    </Button>
  )

  expect(getByRole('button')).toHaveAttribute('type', 'submit')

  rerender(
    <Button data-testid="btn" type="reset">
      button
    </Button>
  )

  expect(getByRole('button')).toHaveAttribute('type', 'reset')
})

test('should be disabled', () => {
  const { getByRole } = render(<Button disabled>button</Button>)
  expect(getByRole('button')).toHaveAttribute('disabled')
})

test('should resize given `width` prop', () => {
  const { getByRole, rerender } = render(<Button width={100}>button</Button>)
  expect(getByRole('button')).toHaveStyle({ width: '100px' })

  rerender(<Button width={'50%'}>button</Button>)
  expect(getByRole('button')).toHaveStyle({ width: '50%' })
})
