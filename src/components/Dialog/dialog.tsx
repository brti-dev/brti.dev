import { Dialog, DialogProps as ReachDialogProps } from '@reach/dialog'

import useMediaQuery from 'lib/use-media-query'
import { CloseButton } from './close-button'

type DialogProps_base = Omit<ReachDialogProps, 'isOpen'> & {
  // Indicates if the dialog is open/shown
  active?: boolean
  // If true, add a CloseButton with onDismiss callback when clicked
  closable?: boolean
  // Expand the modal to the edges of the viewport; 'auto' by default: fullscreen on mobile only
  fullscreen?: boolean | 'auto'
  // Function called whenever the user hits "Escape" or clicks outside the dialog; Used to close the dialog or check if conditions are met before closing
  onDismiss: () => void // Required
}

type AriaLabel = {
  label: string
  'aria-labelled-by'?: never
}

type AriaLabelledBy = {
  'aria-labelledby': string
  label?: never
}

export type DialogProps = DialogProps_base & (AriaLabelledBy | AriaLabel)

export default function CustomDialog({
  active = false,
  children,
  closable = false,
  fullscreen = 'auto',
  label,
  ...rest
}: DialogProps) {
  const isScreenMobile = useMediaQuery('(max-width: 640px)')

  let isFullscreen: boolean
  if (!fullscreen) {
    isFullscreen = false
  } else {
    if (fullscreen === true) {
      isFullscreen = true
    } else {
      isFullscreen = isScreenMobile
    }
  }

  return (
    <Dialog
      isOpen={active}
      data-fullscreen={isFullscreen || undefined}
      aria-label={label || undefined}
      {...rest}
    >
      {closable && <CloseButton onClick={rest.onDismiss} />}
      {children}
    </Dialog>
  )
}
