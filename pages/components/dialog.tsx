import { DialogHook } from 'components/Dialog/dialog.example'
import Layout from 'components/Layout'

export default function DialogComponent() {
  return (
    <Layout title="Dialog component">
      <h1>Dialog Component</h1>
      <DialogHook />

      <h2>Dialog Props</h2>

      <h3>
        <code>{`active={boolean}`}</code>
      </h3>
      <p>Indicates if the dialog is open/shown</p>

      <h3>
        <code>{'closable={boolean}'}</code>
      </h3>
      <p>If true, add a CloseButton with onDismiss callback when clicked</p>

      <h3>
        <code>{`fullscreen={'auto'|boolean}`}</code>
      </h3>
      <p>
        Expand the modal to the edges of the viewport; 'auto' by default:
        fullscreen on mobile only
      </p>

      <h3>
        <code>{`onDismiss={() => void}`}</code>
      </h3>
      <p>
        Function called whenever the user hits "Escape" or clicks outside the
        dialog; Used to close the dialog or check if conditions are met before
        closing
      </p>
    </Layout>
  )
}
