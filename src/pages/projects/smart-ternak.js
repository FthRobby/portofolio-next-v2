import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import {
  GithubIcon,
  DevIcon,
  AndroidIcon,
  IosIcon,
  HuaweiIcon,
  JsIcon,
  VueIcon,
  TailwindIcon,
  BootstrapIcon,
  PiniaLogo,
} from "@/components/Icons";

import proj1 from "/public/images/projects/smartTernak.png";

const Smartternak = () => {
  return (
    <>
      <Head>
        <title>SmartTernak Dashboard</title>
        <meta name="description" content="SmartTernak Dashboard." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Smart-Ternak Dashboard"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                This application is designed for an animal husbandry school in
                Central Java, Indonesia.
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Development | Web Dashboard
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                This dashboard was created to monitor the condition of livestock
                Broilers. It integrates a WebSocket system and connects in real
                time with IoT devices in the cage to monitor air temperature,
                humidity, ammonia levels, air flow, water flow, and light
                intensity. This web app can also be used to record when
                livestock are ready for distribution or sale. I was assigned to
                work on the front end of this dashboard in collaboration with
                the backend and IoT teams. The technologies used include VueJS,
                Bootstrap, Pinia, and Axios for API communication.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                {/* Unleashing the Power of Expo Framework */}
              </h4>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  aria-disabled
                  className="p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark capitalize text-light hover:cursor-not-allowed"
                  aria-label="Visit Theme Demo"
                  href=""
                >
                  Not Avaiable
                </Link>
                <Link href="" className="w-10" aria-label="github link">
                  <JsIcon />
                </Link>
                <Link href="" className="w-10" aria-label="github link">
                  <VueIcon />
                </Link>
                <Link href="" className="w-10" aria-label="github link">
                  <BootstrapIcon />
                </Link>
                <Link href="" className="w-10" aria-label="github link">
                  <PiniaLogo />
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Smartternak;
