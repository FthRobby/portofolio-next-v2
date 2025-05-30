import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/itsme.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import { useTranslation } from "context/TranslationContext";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  const { t } = useTranslation('about')
  return (
    <>
      <Head>
        <title>Fatah RobbySalam | About</title>
        <meta name="description" content="All about me" />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text={t('about.summary')}
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {t('about.title')}
              </h2>
              <p className="font-medium ">
                {/* I'm Riley, a dedicated web developer at Stellar Innovations,
                where I specialize in creating dynamic and user-centric web
                experiences. With over a decade of experience in the industry, I
                have honed my skills in both front-end and back-end
                technologies, allowing me to deliver responsive and
                high-performance websites and applications. */}
                {/* I'm Fatah RobbySalam, a front-end developer at Fortis Solutions,
                where I specialize in creating dynamic and user-centric web and
                mobile app experiences. With approximately 2 years of experience
                in this industry, I have honed my skills in both front-end web
                and mobile development using multiplatform technologies,
                allowing me to deliver responsive and high-performance websites
                and applications. */}
                {t('about.firstParagraph')}
              </p>
              <p className="my-4 font-medium">
                {/* At Fortis Solutions, I've had the opportunity to work on
                numerous high-profile projects that have challenged and expanded
                my expertise. My technical skill set includes HTML, CSS,
                JavaScript, React, and Node.js, among other technologies. One of
                my notable projects involved developing a comprehensive
                e-commerce platform that streamlined the user experience and
                significantly boosted the client's sales. Another project I’m
                particularly proud of was creating an interactive web
                application for a major event, which received widespread acclaim
                for its intuitive design and seamless performance. */}
                {/* At Fortis Solution, I had the opportunity to work on a variety
                of important projects that challenged and broadened my skill
                set. My technical expertise includes HTML, CSS, JavaScript,
                TypeScript, Vue.js, React, React Native, and many other
                technologies. */}
                {t('about.secondParagraph')}
              </p>
              <p className="my-4 font-medium">
                {/* One of my most notable projects was the development of a
                comprehensive online attendance platform designed to streamline
                the user experience. This online attendance application is
                officially used by a government institution, namely the
                Indonesian National Police, and is implemented within the East
                Java Regional Police Department. Another project that I am
                particularly proud of involved creating an interactive web
                application for monitoring livestock conditions, regulating
                temperature, and recording milk production on a goat farm,
                integrated seamlessly with the IoT team. */}
                {t('about.thirdParagraph')}
              </p>
              {/* <p className="my-4 font-medium">
                P.s I'm a big fan of motorcycle and not a real person ✌️.
              </p> */}
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              {/* <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              /> */}
              {/* <Image
                className="h-auto w-full rounded-2xl bg-transparent"
                priority={true}
                src={profile}
                alt="Travis Lord"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              /> */}
              <Image
                priority={true}
                src={profile}
                alt="image"
                className="h-auto w-full ml-0 "
                height={500}
                width={500}
                sizes="39vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={790} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {t('about.daysCoding')}
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={1000} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {t('about.bugsMade')}
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                ~<AnimatedNumberFramerMotion value={950} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {t('about.bugsCrushed')}
                </h3>
              </div>
            </div>
            {/* <HireMe2 /> */}
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
