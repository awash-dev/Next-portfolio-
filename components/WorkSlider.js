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
        title: "Top up ",
        path: "/pu.png",
        link: "https://github.com/awash-dev/midasbuy-clones.git",
        links: "midasbuy-clones.vercel.app",
      },
      {
        title: "blog",
        path: "/blo.png",
        link: "https://github.com/awash-dev/blog.git",
        links: "https://awash-dev.github.io/blog",
      },
    ],
  },
  {
    images: [
      {
        title: "Portfolio",
        path: "/port.png",
        link: "https://github.com/awash-dev/portfolios.git",
        links: "https://awash-dev.github.io/portfolios",
      },
      {
        title: "facebook clone",
        path: "/fa.png",
        link: "https://awash-dev.github.io/facebook-pages/",
        links: "https://awash-dev.github.io/facebook-pages/",
      },
    ],
  },
  {
    images: [
      {
        title: "MERN email",
        path: "/em.png",
        link: "https://github.com/awash-dev/auth-email.git",
        links: "https://auth-email-git-main-mthackets-projects.vercel.app/",
      },
      {
        title: "notcoin clone",
        path: "/not.jpg",
        link: "https://github.com/tab-uc-bot42",
        links: "https://tab-uc-bot42.vercel.app/",
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
                          className="flex items-center gap-2 text-xl"
                          href={image.link}
                        >
                          <div>view code </div>
                          <RxEyeOpen />
                        </a>
                      </div>
                      <div>
                        <a
                          href={image.links}
                   
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
