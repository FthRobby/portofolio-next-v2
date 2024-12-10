import AnimatedText from "@/components/AnimatedText";
import { AppstoreIcon, GithubIcon, PlaystoreIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import proj1 from "../../public/images/projects/smartTernak.png";
import proj2 from "../../public/images/projects/smartFarm.png";
import proj3 from "../../public/images/projects/itani.jpg";
import proj4 from "../../public/images/projects/geniusResto.png";
import proj5 from "../../public/images/projects/geniusRestoAdmin.jpg";
import proj6 from "../../public/images/projects/ePresensiSemeru.png";
import proj7 from "../../public/images/projects/imanhub.jpg";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-center 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light mt-20
      "
    >
      {/* <MovingImg img={img} title={title} link={link} /> */}

      <h2 className="capitalize text-xl text-center font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
        {title}
      </h2>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark 
      bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href="" className="w-10" aria-label="github link">
            <PlaystoreIcon />
          </Link>
          <Link href="" className="w-10" aria-label="github link">
            <AppstoreIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded-lg
             bg-dark mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base border-2 border-solid
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Fatah RobbySalam | Projects</title>
        <meta name="My Project" content="My lists projects" />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Development"
                tools="Expo | React Native | Zustand"
                title="ePresensi Semeru"
                summary="The East Java Regional Police digital attendance application makes it easy to record activity attendance in real-time and provides attendance reports."
                img={proj6}
                date="2023"
                link="/projects/epresensi-semeru"
                github="#"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Design & Development"
                tools="React-Native | GlueStack UI "
                title="iTani - Sahabat Petani"
                img={proj3}
                date="2023"
                link="/projects/itani"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Expo | React-Native | GlueStack UI"
                title="iManhub"
                img={proj7}
                date="2023"
                link="/projects/imanhub"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Bootstrap | Vue Js | Pinia"
                title="SmartTernak Dashboard"
                img={proj1}
                date="2023"
                link="/projects/smart-ternak"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Bootstrap | Vue Js | Vuex"
                title="SmartFarm Dashboard"
                img={proj2}
                date="2023"
                link="/projects/smart-farm"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Vue Js | Tailwind | Vuex "
                title="Restopia Mobile"
                img={proj4}
                date="2023"
                link="/projects/restopia-mobile"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Development"
                tools="Vue Js | Tailwindcss | Vuex"
                title="Restopia Admin Dashboard"
                img={proj5}
                date="2023"
                link="/projects/restopia-dashboard"
              />
            </div>
          </div>

          <Article title="Need an extraordinary project? Contact me!" link="" />

          {/* <ul class="flex flex-col items-center relative pt-16">
            <li
              class="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-betwee bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
              style="transform: none; will-change: auto;"
            >
              <a
                target="_blank"
                class="relative"
                href="https://github.com/lilxyzz/"
              >
                <h2 class="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
                  Adding more soon, thanks for the interest!
                </h2>
                <img
                  alt="Adding more soon, thanks for the interest!"
                  loading="lazy"
                  width="776"
                  height="591"
                  decoding="async"
                  data-nimg="1"
                  class="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  sizes="(max-width: 768px) 60vw,   (max-width: 1200px) 40vw,   33vw"
                />
              </a>
              <span class="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm"></span>
            </li>
          </ul> */}
        </Layout>
      </main>
    </>
  );
}
