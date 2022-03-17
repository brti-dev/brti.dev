import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

jest.mock('../src/lib/use-media-query', () => {
  return {
    __esModule: true,
    default: jest.fn(() => true),
  }
})

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
