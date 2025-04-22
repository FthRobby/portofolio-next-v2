import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/itsme.jpg";
import TechIcon from "@/components/TechIcon";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "context/TranslationContext";

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation("Home");
  const [typewriterWords, setTypewriterWords] = useState([]);

  useEffect(() => {
    setTypewriterWords([
      t("home.role", { defaultValue: "I'm a Frontend Developer." }),
      t("home.description", {
        defaultValue: "I create engaging web and mobile apps experiences.",
      }),
    ]);
  }, [router.locale, t]);


  return (
    <>
      <Head>
        <title>Fatah RobbySalam</title>
        <meta
          name="description"
          content="Personal Web Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-0">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-full lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100 mb-5"
                  height={500}
                  width={500}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                key={router.locale}
                text={t("home.greeting")}
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-full items-center lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <span className="bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  <Typewriter
                    key={router.locale}
                    words={typewriterWords}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2000}
                    cursorColor="#e5a630"
                  />
                </span>
              </div>

              <TechIcon />

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                {/* I'm a front-end developer, passionate about creating dynamic and
                user-friendly web and mobile apps experiences. With a keen eye
                for design and a robust understanding of multiplatform front-end
                technologies, e.g. (Expo) */}
                {t("home.about")}
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                 {t("home.aboutButton")}
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  {t('home.projectButton')}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
