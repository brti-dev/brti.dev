// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

import 'normalize.css'
import 'matterial/styles/global.scss'
import 'styles/custom.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  return <AnyComponent {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
