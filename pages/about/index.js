// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
// counter
import CountUp from "react-countup";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiFlask,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiSqlalchemy,
  SiMysql,
} from "react-icons/si";
import { useState } from "react";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiTailwindcss />,
          <SiSass />,
        ],
      },
      {
        title: "Back-End",
        icons: [
          <SiNodedotjs />,
          <SiExpress />,
          <SiFlask />,
          <SiTypescript />,
          <SiDjango />,
        ],
      },
      {
        title: "Data Base",
        icons: [<SiMongodb />, <SiMysql />, <SiSqlalchemy />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />],
      },
    ],
  },
  // Project Experience
  {
    title: "experience", // Changed from "awards" to "experience"
    info: [
      {
        title: "Awash Shop E-commerce Platform",
        stage: "2023", // Example year, adjust as needed
      },
      {
        title: "Mo7 Top-up System Integration",
        stage: "2022", // Example year, adjust as needed
      },
      {
        title: "Ameibera Dashboard Development",
        stage: "2022-2023", // Example year range, adjust as needed
      },
      // You can add more specific project experiences here
    ],
  },
  // Previous Work Experience (Keeping this as "experience" for company names)
  {
    title: "work", // Changed from "experience" to "work" to differentiate
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  // certifications
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* about image */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] "
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row xl:pl-56 gap-x-6 xl:z-30 z-30">
        {/* About me */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center xl:ml-10"
        >
          <h3 className="text-[25px] -mt-8 ">
            Full-Stack <span className="text-accent">Developer</span>
          </h3>
          <div className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 capitalize flex flex-col gap-4 gap-y-8">
            <div>
              Hi there !👋 I'M &nbsp;
              <strong className="text-white">Mohammed Hussen</strong> <br /> am
              fullstack web developer
            </div>
            <div>
              <motion.a
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                href="/mame cv2.pdf"
                download
                className=" border-2 p-1 z-30 rounded text-white transition-all duration-300 xl:z-30 hover:bg-accent hover:duration-300 hover:border-none"
              >
                Download Resume
              </motion.a>
            </div>

            {/* counter */}

            <div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 2, ease: "easeIn" }}
                className="hidden xl:flex flex-1 xl:gap-x-6"
              >
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                    <CountUp start={-2} end={2} duration={10} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    years of experience
                  </div>
                </div>
                {/* Clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                    <CountUp start={-1} end={6} duration={10} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Clients
                  </div>
                </div>
                {/* Finished Projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={28} duration={10} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Finished Projects
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] -mt-11 ">
          <div>
            {/* button directory title */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:mt-28 "
            >
              {aboutData.map((item, indexs) => {
                return (
                  <div
                    key={indexs}
                    className={` ${
                      index === indexs &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-[999]`}
                    onClick={() => setIndex(indexs)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* about info */}

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, Index) => {
              return (
                <div
                  key={Index}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white"
                >
                  <div>{item.title}</div>
                  <div className="hidden xl:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, Index) => {
                      return (
                        <div key={Index} className="text-2xl transition-all">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
