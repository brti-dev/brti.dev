import Layout from '@/components/Layout'
import Button from '@/components/Button'

const mapProps = (props): string => {
    if (!props) return ''
    let propString = ''
    for (const [key, value] of Object.entries(props)) {
        if (value === true) {
            propString += ` ${key}`
        } else {
            propString += ` ${key}="${value}"`
        }
    }

    return propString
}

const ButtonCode = ({ children, ...props }) => {
    return (
        <code>
            &lt;Button
            {mapProps(props)}&gt;
            {children}&lt;/Button&gt;
        </code>
    )
}

export default function Foo() {
    return (
        <Layout>
            <h1>Button</h1>
            <p>Buttons trigger actions when clicked.</p>
            <h2>Style Variants</h2>
            <Button>Default</Button>{' '}
            <Button variant="outlined">Outlined</Button>{' '}
            <Button variant="contained">Contained</Button>{' '}
            <p>
                <ButtonCode>Default</ButtonCode>
                <br />
                <ButtonCode variant="outlined">Outlined</ButtonCode>
                <br />
                <ButtonCode variant="contained">Contained</ButtonCode>
            </p>
            <h2>Colors</h2>
            <Button variant="contained" color="primary">
                Primary
            </Button>{' '}
            <Button variant="contained" color="secondary">
                Secondary
            </Button>{' '}
            <Button variant="contained" color="red">
                Red
            </Button>{' '}
            <Button variant="contained" color="green">
                Green
            </Button>{' '}
            <p>
                <ButtonCode variant="contained" color="primary">
                    Primary
                </ButtonCode>
                <br />
                <ButtonCode variant="contained" color="secondary">
                    Secondary
                </ButtonCode>
                <br />
                <ButtonCode variant="contained" color="red">
                    Red
                </ButtonCode>
                <br />
                <ButtonCode variant="contained" color="green">
                    Green
                </ButtonCode>
            </p>
            <h2>Loading Button</h2>
            <Button loading>Loading</Button>
            <p>
                <ButtonCode loading>Loading</ButtonCode>
            </p>
            <h2>Anchor Button</h2>
            <Button to="/home">Home</Button>
            <p>
                Add <code>to</code> prop to create a button-like link.
            </p>
            <ButtonCode to="/home">Home</ButtonCode>
        </Layout>
    )
}
