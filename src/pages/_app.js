import '../styles/globals.css';
import Header from '../components/Header/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      
      <Header />

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
