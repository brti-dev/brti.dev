import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import Button from './Button'

const NewMenuButton = ({ children, ...props }) => (
  <MenuButton
    as={Button}
    style={{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }}
    {...props}
  >
    {children}
  </MenuButton>
)

export {
  Menu,
  MenuList,
  NewMenuButton as MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
}
