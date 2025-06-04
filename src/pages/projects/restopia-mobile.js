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
} from "@/components/Icons";

import proj1 from "/public/images/projects/geniusResto.png";

const RestopiaMobile = () => {
  return (
    <>
      <Head>
        <title>Restopia Mobile</title>
        <meta name="description" content="Restopia Mobile." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <Link href="/projects/" legacyBehavior >
            <a
              className="p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                      dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                      md:p-2 md:px-4 md:text-base w-full text-center"
              aria-label="back"
            >
              Back
            </a>
          </Link>
          <AnimatedText
            text="Restopia Mobile"
            className="mb-16 mt-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                The apps I made for the final project during my internship. This
                apps is used to order food at a restaurant or cafe.
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Development | Web Apps
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                I created this web application in collaboration with the UI/UX
                and backend teams. In developing it, I used web frontend
                technologies such as VueJS and Tailwind. This application aims
                to make it easier for customers to order food without having to
                queue at the cashier. It is integrated with the cashier system
                and kitchen applications to notify the chef when an order is
                received. When the order is complete, a notification will appear
                on the ordering device.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                {/* Unleashing the Power of Expo Framework */}
              </h4>

              <div className="flex flex-row-reverse sm:flex-col gap-9 justify-center mt-10">
                <div className=" flex items-center grid-cols-8 gap-4 sm:gap-8">
                  <Link href="" className="w-10" aria-label="github link">
                    <JsIcon />
                  </Link>
                  <Link href="" className="w-10" aria-label="github link">
                    <VueIcon />
                  </Link>
                  <Link href="" className="w-10" aria-label="github link">
                    <TailwindIcon />
                  </Link>
                </div>
                <Link
                  aria-disabled
                  className="p-2 px-6 text-center text-lg font-semibold sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark capitalize text-light hover:cursor-not-allowed"
                  aria-label="Visit Theme Demo"
                  href=""
                >
                  Not Avaiable
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

export default RestopiaMobile;
