import App from "next/app";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";


import { TranslationProvider } from "context/TranslationContext";
import { SpeedInsights } from '@vercel/speed-insights/next';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

function MyApp({ Component, pageProps, locale, messages }) {
  const router = useRouter();
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
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full justify-center items-center flex-1`}>
          <AnimatePresence initial={false} mode="wait">
            <Component key={router.asPath} {...pageProps} />
            <SpeedInsights />
          </AnimatePresence>
        </main>
      </TranslationProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { locale = 'id' } = appContext.router;

  return {
    ...appProps,
    locale,
    pageProps: {
      ...appProps.pageProps,
    },
  };
};

export default MyApp;
