import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const metaDescription = "My personal website. Build using Next Js";
  const metaTitle = "Fatah Robby";
  const metaImage =
    "https://raw.githubusercontent.com/FthRobby/portofolio-next-v2/refs/heads/main/public/images/profile/itsme.jpg";

  useEffect(() => {
    trackVisit();
    // detect();  
  }, []);

  const trackVisit = async () => {
    try {
      const response = await fetch("/api/visit/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error tracking visit:", error);
    }
  };

  // async function detect() {
  //   const ress = await fetch(
  //     `https://ipinfo.io/114.10.151.199?token=6ef34f09dd5e57`
  //   );
  //   const jsonResponse = await ress.json();
  //   console.log("res detect : ", jsonResponse);
  // }

  return (
    <>
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
      <main
        className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
