import '@testing-library/jest-dom'

import { render } from '../../../test-utils'
import Badge from './Badge'
import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import React from 'react'

test('should render content', () => {
  const { getByText } = render(<Badge content={1}>B</Badge>)

  expect(getByText('1')).toBeInTheDocument()
})

test('should not display a number higher than `max`', () => {
  const { getByText } = render(
    <Badge content={100} max={99}>
      B
    </Badge>
  )

  expect(getByText('99+')).toBeInTheDocument
})

test('should not display content when number 0', () => {
  const { getByText } = render(<Badge content={0}>B</Badge>)

  expect(getByText('0')).not.toBeInTheDocument
})

test('should  display content when `showZero` is truthy', () => {
  const { getByText } = render(
    <Badge content={0} showZero>
      B
    </Badge>
  )

  expect(getByText('0')).toBeInTheDocument
})
