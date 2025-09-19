import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import {
  TsIcon, ReactIcon, ExpoIcon, AndroidIcon,
  IosIcon
} from "@/components/Icons";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import proj1 from "/public/images/projects/simpresHatpenPreview.png";


const SimpresHatpen = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    }
  )
  return (
    <>
      <Head>
        <title>SimPres Hatpen</title>
        <meta name="description" content="Sistem informasi presenssi hatpen. " />
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
            text="SimPres Hatpen"
            className="mb-16 mt-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-dark/75 dark:text-light/75">
                SimPres Hatpen is the official app for managing employee attendance at the Aviation Health Center.
              </h2>

              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Development
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                With the support of Face Recognition technology, SimPres Hatpen ensures a faster, safer, and more accurate attendance process. The app also makes it easy to track attendance history and submit leave or absence requests online, giving employees greater flexibility in managing their attendance.
              </p>

              <div className="flex flex-row-reverse sm:flex-col gap-9 justify-center mt-10">
                <div className=" flex items-center grid-cols-8 gap-4 sm:gap-8">
                  <Link href="" className="w-10" aria-label="github link">
                    <TsIcon />
                  </Link>
                  <Link href="" className="w-10" aria-label="github link">
                    <AndroidIcon />
                  </Link>
                  <Link href="" className="w-10" aria-label="github link">
                    <IosIcon />
                  </Link>
                  <Link href="" className="w-10" aria-label="github link">
                    <ExpoIcon />
                  </Link>
                </div>
                <Link
                  aria-disabled
                  className="p-2 px-6 text-center text-lg font-semibold sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark capitalize text-light hover:cursor-not-allowed"
                  aria-label="Visit Theme Demo"
                  href=""
                >
                  Preview Not Avaiable
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
              <div ref={sliderRef} className="keen-slider">
                <Image
                  className="h-auto w-full rounded-2xl keen-slider__slide"
                  src={proj1}
                  alt="Clay Gatsby Theme"
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                  priority
                />
                {/* <div className="keen-slider__slide">1</div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div> */}
              </div>
            </div>
          </div>
        </Layout>
      </main>


    </>
  )

}

export default SimpresHatpen
