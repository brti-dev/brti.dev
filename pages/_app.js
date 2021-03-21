/**
 * This App component is the top-level component which will be common across all the different
 * pages. Keeps state in between routes.
 */

import 'normalize.css'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
