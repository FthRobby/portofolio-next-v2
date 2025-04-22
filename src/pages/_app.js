import { useEffect } from "react";
import App from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import fetch from "node-fetch";

import { NextIntlClientProvider } from "next-intl";
import { TranslationProvider } from "context/TranslationContext";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

function MyApp({ Component, pageProps, locale, messages }) {
  const router = useRouter();

  const metaDescription = "My personal website. Build using Next Js";
  const metaTitle = "Fatah Robby";
  const metaImage =
    "https://raw.githubusercontent.com/FthRobby/portofolio-next-v2/refs/heads/main/public/images/profile/itsme.jpg";

  useEffect(() => {
    // trackVisit();
  }, []);

  const trackVisit = async () => {
    try {
      const ress = await fetch("/api/visit/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      });
      const data = await ress.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TranslationProvider
        locale={router.locale}
        timeZone="Asia/Jakarta"
        messages={pageProps.messages}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:title" content={metaTitle} />
          <meta
            property="og:url"
            content={`https://www.frobby.tech/${router.asPath}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}>
          <Navbar />
          <AnimatePresence initial={false} mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </main>
      </TranslationProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { locale = 'id' } = appContext.router;

  const messages = await import(`../messages/${locale}.json`).then(
    (mod) => mod.default
  );

  return {
    ...appProps,
    locale,
    pageProps: {
      ...appProps.pageProps,
      messages,
    },
  };
};

export default MyApp;
