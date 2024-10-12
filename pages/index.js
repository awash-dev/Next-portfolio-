import Image from "next/image";

// component
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";

//framer motion
import { motion } from "framer-motion";

// variants fade effact

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full  ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container h-full  mx-auto">
          {/* logo title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Transforming Idea <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* logo subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            modern applications with Java, JavaScript, SQL Server, and No SQL.
            Built innovative microservices and Web Services (incl.
            SOA/SOAP/REST/XML). Utilized Cloud Foundry for efficient building on
          </motion.p>

          {/* mobile view */}

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          {/* desktop view */}

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* background image */}

      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-explosion xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>

        {/* particle and avator(hero image) */}
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
