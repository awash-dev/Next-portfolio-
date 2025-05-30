import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export const servicesData = [];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg;text mb-4 xl:mb-0">
            <div>
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-3xl xl:mt-8"
              >
                My Services
              </motion.h2>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 xl:mt-10"
              >
                A MERN stack services space enhances your personal portfolio by
                integrating various functionalities to showcase your skills
                effectively.
              </motion.p>
            </div>

            {/* Slider */}
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      {/* bulb brain image */}
      <Bulb />
    </div>
  );
};

export default Services;
