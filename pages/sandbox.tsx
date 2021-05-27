import { useEffect, useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { Dialog } from '@reach/dialog'

import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import Layout from '@/components/Layout'

export default function TestPage() {
    const [opened, setOpened] = useState(false)
    const toggleOpen = () => setOpened(!opened)

    const [inter, setInter] = useState(false)
    const toggleInter = () => setInter(!inter)
    useEffect(() => {
        if (inter) {
            document.body.dataset.fontInter = 'true'
        } else {
            document.body.dataset.fontInter = 'false'
        }
    }, [inter])

    return (
        <Layout>
            <main>
                <div
                    style={{
                        position: 'fixed',
                        top: 10,
                        right: 10,
                        border: '1px solid #e5e5e5',
                        borderRadius: 5,
                        padding: 10,
                        fontFamily: 'sans-serif',
                        fontSize: 20,
                    }}
                >
                    Font:{' '}
                    {!inter ? (
                        <>
                            <ins>Roboto</ins> | <del>Inter</del>
                        </>
                    ) : (
                        <>
                            <del>Roboto</del> | <ins>Inter</ins>
                        </>
                    )}{' '}
                    <Button onClick={toggleInter}>Toggle</Button>
                </div>
                <h2>
                    Lorem Ipsum <i>Italica</i>
                </h2>
                <p>
                    Ea non <i>aliqua sit nostrud exercitation cillum</i>. Id
                    irure nisi dolor commodo qui magna amet{' '}
                    <b>nisi nostrud cillum</b> irure. Labore eiusmod mollit
                    irure do <a>sunt commodo pariatur</a>.
                </p>
                <p>
                    Officia ex <b>ad excepteur nisi</b> velit non cupidatat
                    cillum laboris anim non ullamco amet. Qui sit eu sit
                    consequat irure commodo exercitation consectetur amet ea
                    irure commodo culpa et. Cupidatat irure{' '}
                    <b>pariatur aliquip id aliqua veniam</b>
                    ullamco deserunt minim et tempor. Dolore ullamco deserunt
                    officia aute proident incididunt tempor ullamco irure
                    voluptate aliqua. <a>Eiusmod aliquip et Lorem</a> ut nisi
                    Lorem ut nostrud.
                </p>
                <h3>Lorem Ipsum Officia</h3>
                <p>
                    Ullamco Lorem id duis ullamco excepteur dolore dolor
                    voluptate. Amet sit ipsum est culpa ea excepteur ad sint sit
                    do deserunt do. Nisi commodo consectetur elit sit eu duis
                    aliqua excepteur ipsum aliquip veniam.
                </p>
                <Button onClick={toggleOpen}>Open Dialog</Button>
                <Dialog isOpen={opened} onDismiss={toggleOpen}>
                    <IconButton className="close-button" onClick={toggleOpen}>
                        <VisuallyHidden>Close</VisuallyHidden>
                        <span aria-hidden>&times;</span>
                    </IconButton>
                    Hello world
                </Dialog>
            </main>
        </Layout>
    )
}
