import '@testing-library/jest-dom'

import { render } from '../../../test-utils'
import Avatar, { AvatarGroup } from '.'
import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import React from 'react'

test('should render initials and label properly', () => {
  const { getByText } = render(<Avatar alt="Barry Lyndon">BL</Avatar>)

  expect(getByText('BL')).toHaveAttribute('aria-label', 'Barry Lyndon')
})

test('should not label when similar text is present', () => {
  const { getByText } = render(<Avatar alt="BL">BL</Avatar>)

  expect(getByText('BL')).not.toHaveAttribute('aria-label')
})

test('should render an image', () => {
  const alt = 'Dan Abramov'
  const src = 'https://bit.ly/dan-abramov'
  const { getAllByRole } = render(<Avatar alt={alt} src={src} />)

  const img = getAllByRole('img')
  expect(img).toHaveLength(2)
  expect(img[1]).toHaveAttribute('alt', alt)
  expect(img[1]).toHaveAttribute('src', src)
})

test('should size correctly by default and when given a `size` value', () => {
  const { getByText } = render(
    <AvatarGroup>
      <Avatar alt="a">a</Avatar>
      <Avatar alt="b" size={20}>
        b
      </Avatar>
    </AvatarGroup>
  )

  expect(getByText('a')).toHaveStyle({ '--size': '40px' })
  expect(getByText('b')).toHaveStyle({ '--size': '20px' })
})

test('should render group', () => {
  const { getAllByRole } = render(
    <AvatarGroup>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
    </AvatarGroup>
  )

  expect(getAllByRole('img')).toHaveLength(2)
})

test('should hide excess avatars in a group', () => {
  const { getAllByRole } = render(
    <AvatarGroup max={2}>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
      <Avatar alt="baz">Z</Avatar>
      <Avatar alt="fiz">Z</Avatar>
    </AvatarGroup>
  )

  expect(getAllByRole('img')).toHaveLength(3)
})

test('should indicate total in a group', () => {
  const { getByText } = render(
    <AvatarGroup total={100}>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
    </AvatarGroup>
  )

  expect(getByText('+98')).toBeInTheDocument()
})

test('should overload element root when given `as` prop', () => {
  const Foo = ({ foo, ...props }: { foo: string }) => (
    <div data-foo={foo} {...props} />
  )

  const { getByText } = render(
    <Avatar alt="foo" as={Foo} foo="foo">
      BL
    </Avatar>
  )

  expect(getByText('BL')).toHaveAttribute('data-foo', 'foo')
})

test('should function as overloaded element', () => {
  type User = {
    username: string
    id: number
    image: `cloudinary:${string}`
  }
  type Props = {
    user: User
    children?: React.ReactNode
  } & OverloadedElementProps

  const user: User = {
    username: 'User987',
    id: 123,
    image: 'cloudinary:foo.jpg',
  }

  const ProfileImage: OverloadedElement<Props> = ({
    user,
    as: Component = 'div',
    ...props
  }: Props) => <Component src={'foo.jpg'} alt={user.username} {...props} />

  const { getByLabelText } = render(
    <ProfileImage as={Avatar} user={user}>
      BL
    </ProfileImage>
  )

  expect(getByLabelText(user.username)).toHaveAttribute('role', 'img')
})
