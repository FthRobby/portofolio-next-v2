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
import { motion } from "framer-motion";


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
  const FramerImage = motion(Image)


  const mentor2 = '/cert/mentor_cert_2.jpg'
  const mentor = '/cert/mentor_cert.jpg'
  const git = '/cert/git.png'
  const sib = '/cert/sib.png'

  // src/data/certificates.ts

  const certificates = [
    {
      id: 1,
      title: 'Sertifikat Penghargaan sebagai Mentor Bootcamp',
      description:
        'Sertifikat penghargaan sebagai mentor pada program Dicoding Bootcamp Batch 2.',
      image_url: '/cert/mentor_cert.jpg',
    },
    {
      id: 2,
      title:
        'Sertifikat Penghargaan Mentor Bootcamp dengan Peningkatan Progress Terbaik',
      description:
        'Sertifikat penghargaan pada program Dicoding Bootcamp Batch 2 sebagai mentor dengan peningkatan progress terbaik.',
      image_url: '/cert/mentor_cert_2.jpg',
    },
    {
      id: 3,
      title: 'Sertifikat Kelulusan Program Magang di PT Git Solution',
      description:
        'Sertifikat kelulusan program magang di PT Git Solution.',
      image_url: '/cert/git.png',
    },
    {
      id: 4,
      title: 'Sertifikat Kelulusan Program SIB Dicoding - Frontend & Backend Web Developer',
      description:
        'Sertifikat kelulusan program SIB Dicoding x Kampus Merdeka.',
      image_url: '/cert/sib.png',
    },
  ];

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
                {t('about.firstParagraph')}
              </p>
              <p className="my-4 font-medium">
                {t('about.secondParagraph')}
              </p>
              <p className="my-4 font-medium">

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
          </div>

          <Skills />
          <div></div>
          <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            {t('about.cert')}
          </h2>
          <section className=" grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 justify-center">
            {certificates
              .map((item, index) => (
                <article
                  key={index}
                  className="relative flex w-full flex-col items-center rounded-2xl border border-solid border-dark 
                 bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4 mt-5 md:mt-0"
                >
                  {/* Background layer */}
                  <div
                    className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
                   dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
                  />

                  {/* Image */}
                  <FramerImage
                    src={item.image_url}
                    className="h-auto w-full object-cover rounded-xl"
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    width={50}
                    height={50}
                  />

                  {/* Text container */}
                  <div
                    className="flex w-full flex-col items-start justify-between pt-6 text-left"
                  >
                    <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
                      {item.title}
                    </span>
                  </div>
                </article>
              ))}
          </section>
          <Experience />
        </Layout>
      </main>
    </>
  );
}
