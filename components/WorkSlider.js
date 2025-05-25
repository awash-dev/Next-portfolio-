import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { RxArrowTopRight, RxDownload, RxEyeOpen } from "react-icons/rx";

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
        title: "Mo7 Top-up System",
        path: "/pu.png",
        link: "https://github.com/awash-dev/midasbuy-clones.git", // GitHub/Code link
        liveLink: "https://midasbuy-clones.vercel.app", // Live Demo link
      },
      {
        title: "Personal Blog",
        path: "/blo.png",
        link: "https://github.com/awash-dev/blog.git",
        liveLink: "https://awash-dev.github.io/blog",
      },
      {
        title: "E-commerce Shop", // Added a third image for the 4-column grid example
        path: "/ecom.png", // Replace with an actual path
        link: "https://github.com/your-repo/ecommerce",
        liveLink: "https://your-ecommerce-live.com",
      },
      {
        title: "Dashboard UI", // Added a fourth image
        path: "/dash.png", // Replace with an actual path
        link: "https://github.com/your-repo/dashboard",
        liveLink: "https://your-dashboard-live.com",
      },
    ],
  },
  {
    images: [
      {
        title: "Developer Portfolio",
        path: "/port.png",
        link: "https://github.com/awash-dev/portfolios.git",
        liveLink: "https://awash-dev.github.io/portfolios",
      },
      {
        title: "Facebook Clone UI",
        path: "/fa.png",
        link: "https://awash-dev.github.io/facebook-pages/",
        liveLink: "https://awash-dev.github.io/facebook-pages/",
      },
      {
        title: "MERN Email Auth",
        path: "/em.png",
        link: "https://github.com/awash-dev/auth-email.git",
        liveLink: "https://auth-email-git-main-mthackets-projects.vercel.app/",
      },
      {
        title: "Notcoin Clone Game",
        path: "/not.jpg",
        link: "https://github.com/tab-uc-bot42",
        liveLink: "https://tab-uc-bot42.vercel.app/",
      },
    ],
  },
  // Add more slides or images as needed to fill the 4-column grid
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
      // Set a fixed height here, e.g., 'h-[400px]' or 'h-[550px]' based on your design
      className="h-[400px] sm:h-[480px] lg:h-[550px]" // Adjusted heights for better fit with 4 columns
    >
      {workSlides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          {/* Changed grid-cols-2 to grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full"> {/* Added h-full to grid */}
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden w-full h-full">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* Content on Hover */}
                  <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="text-xl font-bold mb-2 break-words">
                      {image.title}
                    </div>
                    <div className="flex flex-col gap-2">
                      {/* View Code Link */}
                      {image.link && (
                        <a
                          href={image.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                        >
                          <RxEyeOpen className="text-lg" />
                          <span>View Code</span>
                        </a>
                      )}
                      {/* Live Demo Link */}
                      {image.liveLink && (
                        <a
                          href={image.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                        >
                          <RxArrowTopRight className="text-lg" />
                          <span>Live Demo</span>
                        </a>
                      )}
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