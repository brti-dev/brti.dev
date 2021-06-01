import Link from 'next/link'

import Layout from '@/components/Layout'

const COMPONENTS = ['button']

export default function Foo() {
    return (
        <Layout>
            <h1>UI Components</h1>
            <ul>
                {COMPONENTS.map(component => (
                    <li key={component}>
                        <Link href={`/components/${component}`}>
                            {component}
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
