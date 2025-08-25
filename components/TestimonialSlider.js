import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// testimonial data
const testimonialData = [
  {
    image: "/fuad soft.jpg",
    name: "Fuad Seid",
    position: "Software engineer",
    message: "We've joined our hands on several projects, and Mohammed is one of the best people I worked with. I highly recommend his expertise to any person looking for Fullstack developments. He is the most profound person I have met, and his eagerness to learn new technologies is amazing.",
  },
  {
    image: "/IMG_20250104_230210_081.jpg",
    name: "Abdo Mohammed",
    position: "Developer",
    message: "Mohammed is exceptionally intelligent and an outstanding problem solver. I have collaborated with him on multiple projects over the past month and intend to continue utilizing his services in the future. His proficiency in Django, Flask, Next js and React js is unparalleled!",
  },
  {
    image: "/ar.jpg",
    name: "Argaga Mohammed",
    position: "Law Professional",
    message: "Mohammed has an amazing approach to learning, and his progress is impressive. He is dedicated to acquiring new skills and developing them to elevate his knowledge from beginner to advanced levels.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '.testimonial-swiper-button-next',
          prevEl: '.testimonial-swiper-button-prev',
        }}
        loop={true}
        speed={500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.testimonial-pagination',
          bulletClass: 'testimonial-bullet',
          bulletActiveClass: 'testimonial-bullet-active'
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40
          }
        }}
      >
        {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 mx-4 md:mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                {/* Person Image & Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative mx-auto md:mx-0 mb-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-accent/30 mx-auto md:mx-0">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                     
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4 md:mt-6">{person.name}</h3>
                  <p className="text-sm text-accent">{person.position}</p>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
                    <FaQuoteLeft className="text-2xl md:text-3xl text-accent/60" />
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed md:leading-loose">
                    {person.message}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="testimonial-swiper-button-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer transition-colors">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      
      <div className="testimonial-swiper-button-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer transition-colors">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="testimonial-pagination flex justify-center gap-2 mt-6 md:mt-8" />
      
      <style jsx>{`
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-bullet-active {
          background: #46B7F6;
          width: 30px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;