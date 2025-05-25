import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center justify-center"> {/* Added justify-center */}
      <Circles />
      <div className="container mx-auto h-full flex items-center justify-center flex-col"> {/* Added h-full and justify-center */}
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"> {/* Added lg:text-left for text alignment */}
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl "
            >
              My Works
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 xl:mt-10"
            >
              A MERN stack workspace is ideal for creating a personal
              portfolio website, showcasing your skills and projects.
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* bulb brain image */}
      <Bulb />
    </div>
  );
};

export default Work;