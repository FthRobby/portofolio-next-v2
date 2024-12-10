import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-slideGreen"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-lightGreen shadow-3xl 
            origin-top  dark:bg-slideGreen dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Fortis Solutions"
            time="Feb 2023 - Present"
            address="Yogyakarta, Indonesia"
            companyLink="https://google.com/"
            work="At Fortis Solution, I work as a frontend developer for both web and mobile platforms. My responsibilities include delivering 
            responsive and high-performance websites. For web applications, I utilize technologies such as Vue.js, Bootstrap, and Tailwind. 
            For mobile applications, I use cross-platform technologies like React Native and Expo. I collaborate with the UI/UX team to create 
            applications that address client issues and requests, ensuring that the projects meet high standards in both functionality and user 
            experience.My work is driven by a passion for continuous learning and innovation, always striving to push the boundaries of what's 
            possible in web and mobile development."
          />

          <Details
            position="Web Developer Mentor"
            company="Dicoding"
            time="Jan 2024 - May 2024"
            address="Online Mentoring"
            companyLink="https://dicoding.com/"
            work="Dicoding is a technology education platform that helps produce globally standardized digital talent, all to accelerate 
              Indonesia to the forefront. At Dicoding, I lead, assist, and maintain a conducive and safe learning environment for all bootcamp 
              participants, providing consultative learning support to students. I uphold honesty and integrity by not sharing code or engaging 
              in any other forms of plagiarism with students, particularly concerning assignments, projects, and submissions during the learning 
              process."
          />

          <Details
            position="Web Developer Intern"
            company="Gits Solutions"
            time="Aug 2022 - Dec 2022"
            address="Yogyakarta, Indonesia"
            companyLink="https://gitsolution.co.id/"
            work="At Gits Solutions, I worked as a front-end web developer intern. This was the beginning of my journey as a programmer,
             where I learned how dynamic websites are created, collaborated with a team, and honed my logical thinking skills. I focused 
             on front-end technologies, especially Vue.js. At the end of the program, my team and I collaborated on a final project: a 
             Point of Sale (PoS) system."
          />
        </ul>
      </div>

      {/* button sections */}
      <div className="mt-40 flex justify-center items-center gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        {/* <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link> */}
      </div>
    </div>
  );
};

export default Experience;
