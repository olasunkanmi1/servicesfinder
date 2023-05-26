import type { AppProps } from 'next/app';
import "../styles/globals.css";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp;