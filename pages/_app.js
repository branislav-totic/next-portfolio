import react, { useState, useEffect } from "react";
import Head from "next/head";
import { Footer, Header } from "../components";
import { CreateGlobalStyle, Contianer, Root, NavSpacer } from "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CreateGlobalStyle />
      <Head>
        <title>NEXT App Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/GrimptPrint/Grimpt-PrintLight.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GrimptPrint/Grimpt-PrintRegular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GrimptPrint/Grimpt-PrintBold.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Root>
        <Header isDesktop={isDesktop} />
        <Contianer>
          <NavSpacer />
          <Component {...pageProps} isDesktop={isDesktop} />
        </Contianer>
        <Footer />
      </Root>
    </>
  );
};

export default MyApp;
