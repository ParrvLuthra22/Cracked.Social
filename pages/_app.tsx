import type { AppProps } from 'next/app'
import '../styles/globals.css'
import CursorRing from '../components/CursorRing'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CursorRing />
      <Component {...pageProps} />
    </>
  )
}
