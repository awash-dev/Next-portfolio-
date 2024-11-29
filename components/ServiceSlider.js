// icons
import { RxArrowTopRight } from "react-icons/rx";
import { IoLogoAndroid } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaAppStoreIos, FaRegCopy } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    icon: <IoLogoAndroid />,
    title: "Android Development",
    description:
      "Leverage mobile technology with Kotlin, React Native, and Flutter for high-performance apps.",
  },
  {
    icon: <FaAppStoreIos />,
    title: "iOS App Development",
    description:
      "Bring your app ideas to life with Swift, React Native, and Flutter for seamless experiences.",
  },
  {
    icon: <FaEarthAmericas />,
    title: "Web Development",
    description:
      "Create dynamic websites with HTML, CSS, JavaScript, and frameworks like React and Angular.",
  },
  {
    icon: <FaRegCopy />,
    title: "Copywriting",
    description:
      "Engage your audience with clear, compelling copy that drives action.",
  },
  {
    icon: <CiSearch />,
    title: "SEO Optimization",
    description:
      "Enhance your online presence with keyword research and optimization for organic traffic.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-slate-950 h-full rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>

            {/* title && description */}
            <div>
              <div className="font-bold text-lg">{item.title}</div>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
