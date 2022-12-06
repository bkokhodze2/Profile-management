import {Provider} from 'react-redux';
import "../../styles/globals.css"
import "../../styles/font.css"
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Script from 'next/script'
import store from "../components/store/index"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
      <>
        <Script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.6/locale/ka.min.js"/>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
  )
}





