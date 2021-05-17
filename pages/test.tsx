import { useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { Dialog } from '@reach/dialog'
import Button from '../components/Button'
import Layout from '../components/Layout'

export default function TestPage() {
    const [opened, setOpened] = useState(false)
    const toggleOpen = () => setOpened(!opened)

    return (
        <Layout>
            <main>
                <Button onClick={toggleOpen}>Open Dialog</Button>
                <Dialog isOpen={opened} onDismiss={toggleOpen}>
                    <button className="close-button" onClick={toggleOpen}>
                        <VisuallyHidden>Close</VisuallyHidden>
                        <span aria-hidden>×</span>
                    </button>
                    Hello world
                </Dialog>
            </main>
        </Layout>
    )
}