import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

type NextPageWithLayout=NextPage &{
   getLayout?:(page:ReactElement)=>JSX.Element
}

type AppPropsWithLayout=AppProps & {
   Component:NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  
   // return <Component {...pageProps} />

   const getLayout=Component.getLayout || ((page)=>page)

   return getLayout(<Component {...pageProps} />);

}
