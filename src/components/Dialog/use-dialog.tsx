import { useState } from 'react'

export function useDialog(
  initialState: boolean = false
): [boolean, () => void, () => void] {
  const [active, setActive] = useState(initialState)
  const open = () => setActive(true)
  const close = () => setActive(false)

  return [active, open, close]
}
