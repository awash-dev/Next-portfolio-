// Next.js Image component
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";

// Framer Motion
import { motion } from "framer-motion";

// Variants for fade effects
import { fadeIn } from "../variants";

// Motivational phrases for coding
const motivationalPhrases = [
  "Code Your Dreams <br /> Into Reality",
  "Empowering Ideas <br /> Through Code",
  "Building the Future <br /> One Line at a Time",
  "Transforming Challenges <br /> Into Solutions",
  "Innovate, Create, <br /> Code!",
  "Turning Concepts <br /> Into Code",
];

const Home = () => {
  // Randomly select a motivational phrase
  const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container h-full mx-auto">
          {/* Logo Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
            dangerouslySetInnerHTML={{ __html: randomPhrase }} // Set the HTML content
          />
          {/* Logo Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Crafting modern applications utilizing Java, JavaScript, SQL Server, and NoSQL technologies. 
            We build innovative microservices and web services (including SOA, SOAP, REST, and XML). 
            Our expertise in Cloud Foundry allows for efficient building and deployment in cloud environments.
          </motion.p>

          {/* Mobile View */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          {/* Desktop View */}
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

      {/* Background Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* Particle and Avatar (Hero Image) */}
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
