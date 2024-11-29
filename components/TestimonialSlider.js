import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa"; // Make sure to import this if you are using it

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/fuad soft.jpg",
    name: "Fuad Seid",
    position: "Software engineer",
    message:
      "We've joined our hands on several projects, and Mohammed is one of the best people I worked with. I highly recommend his expertise to any person looking for Fullstack developments. He is the most profound person I have met, and his eagerness to learn new technologies is amazing, and his ability to tackle a problem is remarkable.",
  },
  {
    image: "/a.jpg",
    name: "Abdo Mohammed",
    position: "Developer",
    message:
      "Mohammed is exceptionally intelligent and an outstanding problem solver. I have collaborated with him on multiple projects over the past month and intend to continue utilizing his services in the future. His proficiency in Django, Flask, Next js and React js is unparalleled!",
  },
  {
    image: "/ar.jpg",
    name: "Argaga Mohammed",
    position: "law",
    message:
      "Mohammed has an amazing approach to learning, and his progress is impressive. He is dedicated to acquiring new skills and developing them to elevate his knowledge from beginner to advanced levels. Additionally, he has a strong understanding of concepts, and the way he shares his skills helps others grasp complex topics at a deeper level.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      speed={150}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-[400px]"
    >
      {testimonialData.map((person, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-4 md:px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* person image */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={200} // Adjusted for mobile
                    height={200} // Adjusted for mobile
                    className="w-[150px] h-[150px] rounded-full" // Adjusted for mobile
                  />
                </div>

                {/* person name */}
                <div className="text-lg text-center">{person.name}</div>

                {/* person experience/skill */}
                <div className="text-[10px] uppercase font-extralight tracking-widest">
                   {person.position}
                </div>
              </div>
            </div>

            {/* person feedback */}
            <div
              className="xl:bg-pink-500/5 flex-1 flex justify-center items-center before:w-[1px] xl:before:bg-slate-200 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
            >
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-white/20 mx-auto md:mx-0" /> {/* Adjusted for mobile */}
              </div>
              <div className="xl:text-lg text-[10px} text-center md:text-left p-0 xl:p-10">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
