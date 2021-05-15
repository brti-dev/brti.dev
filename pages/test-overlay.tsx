import { useState } from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Overlay from '../components/Overlay'

export default function TestPage() {
    const [opened, setOpened] = useState(false)
    console.log({opened})
    const toggleOpen = () => {
        console.log('toggle open', opened, !opened)
        setOpened(!opened)
    }
    const style = {
        zIndex: 100, backgroundColor: 'white', position: 'absolute', top: '10vw', right: '10vw', bottom: '10vw', left: '10vw' 
    }

    return (
        <Layout>
            <main>
                <Button onClick={toggleOpen}>Open Overlay</Button>
                <Overlay opened={opened} onClose={toggleOpen} />
                <div className="modal" hidden={!opened} aria-hidden={!opened} style={style}>
                    <h6>Hello</h6>
                    <Button onClick={toggleOpen}>Goodbye</Button>
                </div>
            </main>
        </Layout>
    )
}