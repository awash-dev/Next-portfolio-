import Circle from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 ">
      <div
        className="container mx-auto py-32 text-center xl:text-left 
        flex items-center 
        justify-center h-full "
      >
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* contact text */}
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[30px] mb-12"
          >
            Contact Me
          </motion.h2>

          {/* contact dorm */}
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input name && email */}
            <div className="flex gap-x-6 w-full">
              <input
                className="input placeholder:text-white/75 "
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="input placeholder:text-white/75 "
                type="email"
                placeholder=" Type  Email"
                required
              />
            </div>
            <input
              className="input placeholder:text-white/75 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="Phone Number"
              required
            />
            <textarea
              placeholder="Type Message Here! "
              className="textarea h-[100px] xl:h-[150px]"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500  ">
                Send
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
              transition-all duration-300 absolute text-[22px]
              "
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
