// Next.js Image component
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const motivationalPhrases = [
  "Code Your Dreams <br /> Into Reality",
  "Empowering Ideas <br /> Through Code",
  "Building the Future <br /> One Line at a Time",
  "Transforming Challenges <br /> Into Solutions",
  "Innovate, Create, <br /> Code!",
  "Turning Concepts <br /> Into Code",
];

const Home = () => {
  const randomPhrase =
    motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  return (
    <div className="relative h-full bg-primary/60 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-0" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-center xl:text-left xl:pt-40">
        {/* Heading */}
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6"
          dangerouslySetInnerHTML={{ __html: randomPhrase }}
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-lg text-gray-300 max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          Crafting modern applications using Java, JavaScript, SQL Server, and NoSQL. 
          We build microservices and APIs (SOA, SOAP, REST, XML) with seamless deployment 
          on cloud platforms like Cloud Foundry.
        </motion.p>

        {/* CTA Button */}
        <div className="flex justify-center xl:justify-start">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Background visuals */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Explosion effect */}
        <div className="hidden xl:block absolute right-0 bottom-0 w-full h-full bg-right bg-no-repeat bg-explosion mix-blend-color-dodge z-0" />
        
        {/* Particles */}
        <ParticlesContainer />

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute max-w-[737px] max-h-[678px] w-full h-full lg:bottom-0 lg:right-[8%] z-10"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;