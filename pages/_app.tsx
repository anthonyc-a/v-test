import '../styles/globals.css'
import "swiper/css";
import "../styles/VideoPlayer.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
