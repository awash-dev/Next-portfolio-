import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { RxArrowTopRight, RxDownload, RxEyeOpen } from "react-icons/rx"; // Make sure to import this if you are using it

// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

// data
const workSlides = [
  {
    images: [
      {
        title: "title 1",
        path: "/thumb1.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
      {
        title: "title 2",
        path: "/thumb2.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
    ],
  },
  {
    images: [
      {
        title: "title 5",
        path: "/thumb4.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
      {
        title: "title 6",
        path: "/thumb1.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
    ],
  },
  {
    images: [
      {
        title: "title 5",
        path: "/thumb4.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
      {
        title: "title 6",
        path: "/thumb1.jpg",
        link: "https://github.com/awash-dev",
        web: "https://github.com/awash-dev/next-portfolio",
      },
    ],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[180px] sm:h-[480px]"
    >
      {workSlides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title} // Added alt attribute
                    className="h-[150px] xl:h-[300px]"
                  />
                  {/* hover layout */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* title && redirect */}
                  <div className="absolute  -bottom-20 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-28 xl:group-hover:-translate-y-36">
                    <div className="flex flex-col items-center gap-x-2 text-xl ">
                      <div>{image.title}</div>
                      <div>
                        <a
                          className="flex items-center gap-2 text-xl "
                          href={image.link}
                        >
                          <div>view code </div>
                          <RxEyeOpen />
                        </a>
                      </div>
                      <div>
                        <a
                          href={image.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex text-xl items-center gap-1"
                        >
                          <div>visit</div>
                          <RxArrowTopRight className="hover:rotate-45" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
