import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
