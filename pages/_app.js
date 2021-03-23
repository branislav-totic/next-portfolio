import Head from 'next/head'
import { Footer, Header } from '../components'
import { CreateGlobalStyle, Contianer } from '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <CreateGlobalStyle />
      <Head>
        <title>NEXT App Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contianer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Contianer>
    </>
  )
}

export default MyApp
