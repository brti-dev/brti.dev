---
title: How to build an accessible navigation menu
date: '2021-06-26'
tags:
  - accessibility
  - a11y
  - webdev
  - frontend
  - react
  - javascript
---

The header navigation here on this site is built using a somewhat complex custom UI component that mimics the functionality of a native `select` component. Making this navigation component accessible and functional for screen readers and keyboard users posed a challenge. <!-- more -->

## Reference ARIA Authoring Best Practices docs

My first stop was to reference the [W3C docs](https://www.w3.org/TR/wai-aria-practices-1.1/) on authoring rich and accessible internet apps. Reviewing the list of design patters and widgets, I narrowed down my navigation component to either a Listbox or Menu:

[Listbox](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox)
: A listbox widget presents a list of options and allows a user to select one or more of them. A listbox that allows a single option to be chosen is a single-select listbox; one that allows multiple options to be selected is a multi-select listbox.

[Menu](https://www.w3.org/TR/wai-aria-practices-1.1/#menu)
: A menu is a widget that offers a list of choices to the user, such as a set of actions or functions. A menu is usually opened, or made visible, by activating a menu button, choosing an item in a menu that opens a sub menu, or by invoking a command... that opens a context specific menu. When a user activates a choice in a menu, the menu usually closes unless the choice opened a submenu.

Although I prototyped the navigation component to mimic a `select` component, and a Listbox sounds like exactly what I was looking for, I ultimately decided that my component was more Menu-like since I had a button that activated the menu dropdown and there would be only single options available.

**In short, a listbox is for a selection of form-like items with the option of choosing one or more, while a menu is for navigation-like items with the option of only choosing one among a single menu or submenu(s).**

## Menu roles, states and properties

The relevant ARIA specifications this particular menu are:

- A menu is a container of items that represent choices. The element serving as the menu has a role of either `menu` or `menubar`.
- The items contained in a menu are child elements of the containing menu or menubar and have any of the following roles: `menuitem`, `menuitemcheckbox`, `menuitemradio`
- The following approach is used to enable scripts to move focus among items in a menu:
  - Each item in the menu has tabindex set to -1.
- An element with role `menu` either has:
  - `aria-labelledby` set to a value that refers to the menuitem or button that controls its display.
  - A label provided by `aria-label`.
- If a menu is horizontally oriented, it has `aria-orientation` set to `horizontal`. The default value of `aria-orientation` for a menu is `vertical`.

## Menubutton roles, states, and properties

Another component in my navigation widget is the [Menubutton](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton) controller that opens and closes the menu. The following ARIA implementations are relevant to this particular component:

- The element that opens the menu has role `button`. (My Menubutton is a `<button>` so happily it is automatically given this role without explicitly coercing it into the role)
- The element with role `button` has `aria-haspopup` set to either `menu` or `true`.
- When the menu is displayed, the element with role `button` has `aria-expanded` set to true. When the menu is hidden, it is recommended that `aria-expanded` is not present. ...
- The element that contains the menu items displayed by activating the button has role `menu`.

## Putting it all together

To put it all together, we need React to manage the state and effects of the menu and `keydown` listeners to implement the [keyboard interaction strategy](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-12) defined in the specs.

```javascript
function keyboardNav(event) {
  const activeEl = document.activeElement
  let activeIndex = Number(activeEl.dataset.menuIndex)
  if (!activeIndex) {
    activeIndex = 0
  }
  let newActiveIndex
  const numListboxOptions =
    document.getElementById('header__nav__menu').childElementCount + 1 // Account for button

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      newActiveIndex = activeIndex + 1
      if (newActiveIndex >= numListboxOptions) {
        newActiveIndex = 0
      }
      break

    case 'ArrowUp':
      event.preventDefault()
      newActiveIndex = activeIndex - 1
      if (newActiveIndex < 0) {
        newActiveIndex = numListboxOptions - 1
      }
      break

    case 'Home':
      event.preventDefault()
      newActiveIndex = 0
      break

    case 'End':
      event.preventDefault()
      newActiveIndex = numListboxOptions - 1
      break

    case 'Tab':
    case 'Escape':
      event.preventDefault()
      document.getElementById('header__nav__trigger').click()
      break
  }

  if (!!isNaN(newActiveIndex)) {
    return
  }

  let focusEl = document.querySelectorAll(
    `[data-menu-index="${newActiveIndex}"]`
  )[0]
  focusEl.tabIndex = 0
  focusEl.focus()
}

function Header() {
  const [nav, setNav] = useState({ opened: false })
  const toggleNav = () => setNav({ opened: !nav.opened })

  useEffect(() => {
    if (nav.opened) {
      document.addEventListener('keydown', keyboardNav)
    } else {
      document.removeEventListener('keydown', keyboardNav)
    }

    return () => document.removeEventListener('keydown', keyboardNav)
  }, [nav])

  return (
    <nav>
      <Button
        id="header__nav__trigger"
        onClick={toggleNav}
        data-menu-index={0}
        aria-haspopup="menu"
        aria-controls="header__nav__menu"
        aria-expanded={nav.opened}
      >
        {vaguelyGetPageTitle()}
      </Button>
      <ul id="header__nav__menu" role="menu" aria-label="site navigation">
        {PAGES.map(({ link, title: pageTitle }, index) => (
          <li key={link} role="menuitem" hidden={!nav.opened}>
            <NavLink
              href={link}
              scroll={false}
              navIndex={index}
              className="nav-item unstyled"
              tabIndex={-1}
              data-menu-index={index + 1}
            >
              {pageTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

Hello, everyone! Our menu is fully accessible to you!

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/2auZhSgFn714e9CrFO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small style="display:flex;justify-content:flex-end;"><a href="https://giphy.com/gifs/hello-all-helloall-2auZhSgFn714e9CrFO">via GIPHY</a></small>

🕵️ [See the source code on Github](https://github.com/dr-spaceman/brti.dev/blob/main/src/components/Layout.tsx)
