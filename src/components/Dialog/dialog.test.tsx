import { useState } from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../../test-utils'
import Dialog from '.'
import { DialogHook } from './dialog.example'

const TestDialog = ({ label = 'dialog', ...rest }) => (
  <Dialog
    active
    closable
    label={label}
    onDismiss={() => console.log('dismiss')}
    {...rest}
  >
    <div id="dialog">dialog</div>
  </Dialog>
)

jest.mock('lib/use-media-query', () => {
  return {
    __esModule: true,
    default: jest.fn(() => true),
  }
})

describe('useDialog hook', () => {
  test('should appear and disappear', () => {
    render(<DialogHook />)
    const activateBtn = screen.getByRole('button', { name: 'Open Dialog' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    userEvent.click(activateBtn)
    expect(screen.queryByRole('dialog')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: 'Close Dialog' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

test('should be labelled correctly', () => {
  const { rerender } = render(<TestDialog />)
  expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'dialog')
  rerender(<TestDialog aria-labelledby="dialog" label="" />)
  expect(screen.getByRole('dialog')).toHaveAttribute(
    'aria-labelledby',
    'dialog'
  )
})

test('should render correctly', () => {
  render(<TestDialog />)
  expect(screen.queryByRole('dialog')).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Close' })).toBeInTheDocument()
})
