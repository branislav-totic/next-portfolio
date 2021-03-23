import Head from "next/head";
import { Footer, Header } from "../components";
import { CreateGlobalStyle, Contianer, Root } from "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <CreateGlobalStyle />
      <Head>
        <title>NEXT App Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/GrimPrint/Grimpt-PrintLight.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GrimPrint/Grimpt-PrintRegular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GrimPrint/Grimpt-PrintBold.woff"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Root>
        <Header />
        <Contianer>
          <Component {...pageProps} />
        </Contianer>
        <Footer />
      </Root>
    </>
  );
};

export default MyApp;
