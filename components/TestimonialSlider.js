import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination , Autoplay} from "swiper";
import { FaQuoteLeft } from "react-icons/fa"; // Make sure to import this if you are using it

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
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
      modules={[Navigation, Pagination,Autoplay]}
      className="h-[400px]"
    >
      {testimonialData.map((person, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* person image */}

                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={200} height={200} className="w-[100px] h-[100px] " />
                </div>

                {/* person name */}

                <div className="text-lg">{person.name}</div>

                {/* person experiance/skill */}

                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* person feedback */}

            <div
              className="xl:bg-pink-500/5  flex-1 flex   justify-center items-center before:w-[1px]
             xl:before:bg-slate-200 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
            >
              <di className="mb-4">
                <FaQuoteLeft className="text-4xl text-white/20 mx-auto md:mx-0" />
              </di>
              <div className="xl:text-lg text-center md:text-left p-0 xl:p-10">
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
