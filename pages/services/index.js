import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Service Icons
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaHashtag,
  FaPaintBrush,
  FaServer,
  FaCloud,
} from "react-icons/fa";

// Service data
const servicesData = [
  {
    title: "Web Development",
    description:
      "Full-stack web applications with modern frameworks like React, Next.js, Node.js, and MongoDB.",
    icon: <FaCode className="text-4xl text-accent mb-4" />,
    features: ["Frontend", "Backend APIs", "Database Design", "Deployment"],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native for iOS and Android.",
    icon: <FaMobile className="text-4xl text-accent mb-4" />,
    features: ["iOS Apps", "Android Apps", "UI/UX Design", "App Deployment"],
    technologies: ["React Native", "Expo", "Redux", "Firebase"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Desktop Applications",
    description: "Cross-platform desktop applications built with Electron.js.",
    icon: <FaDesktop className="text-4xl text-accent mb-4" />,
    features: ["Windows Apps", "MacOS Apps", "Linux Apps", "Auto Updates"],
    technologies: ["Electron.js", "React", "Node.js", "Webpack"],
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Social Media Management",
    description: "Complete social media strategy and community management.",
    icon: <FaHashtag className="text-4xl text-accent mb-4" />,
    features: [
      "Content Strategy",
      "Audience Engagement",
      "Analytics",
      "Growth",
    ],
    platforms: ["Instagram", "Twitter", "Facebook", "LinkedIn", "TikTok"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Content Creation",
    description:
      "Engaging content including graphics, videos, and written content.",
    icon: <FaPaintBrush className="text-4xl text-accent mb-4" />,
    features: [
      "Graphic Design",
      "Video Editing",
      "Copywriting",
      "Brand Identity",
    ],
    tools: ["Adobe Suite", "Canva", "CapCut", "Figma", "InDesign"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Backend Services",
    description:
      "Robust backend development with RESTful APIs and database management.",
    icon: <FaServer className="text-4xl text-accent mb-4" />,
    features: [
      "API Development",
      "Authentication",
      "Database",
      "Server Config",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "fastAPI",
      "Django",
      "Flask",
      "Go",
    ],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Cloud Solutions",
    description: "Cloud deployment and scalable infrastructure solutions.",
    icon: <FaCloud className="text-4xl text-accent mb-4" />,
    features: ["Cloud Deployment", "Serverless", "CDN Setup", "Optimization"],
    providers: ["AWS", "Google Cloud", "Vercel", "Netlify", "DigitalOcean"],
    color: "from-cyan-500/20 to-emerald-500/20",
  },
];

const Services = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-primary/30 py-20 flex items-center overflow-hidden relative">
      <Circles />

      <div className="container mx-auto mt-2 xl:mt-0 px-4 h-full">
        <div className="flex flex-col xl:flex-row gap-x-8 h-full">
          {/* Text Content */}
          <div className="text-center xl:text-left xl:w-[30%] flex flex-col justify-center mb-10 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-2"
            >
              My <span className="text-accent">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto xl:mx-0 mt-1 text-white/80"
            >
              Comprehensive digital solutions from web and mobile development to
              social media management.
            </motion.p>
          </div>

          {/* Services Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%] -mt-10 xl:-mt-0 h-full flex items-center"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet bg-white/30",
                bulletActiveClass: "swiper-pagination-bullet-active bg-accent",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              className="h-full pb-16"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index} className="h-auto py-2">
                  <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 rounded-2xl p-5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group relative h-full flex flex-col">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    />

                    {/* Icon */}
                    <div className="flex justify-center">{service.icon}</div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors text-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-4 text-sm leading-relaxed text-center flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies/Platforms */}
                    <div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {(
                          service.technologies ||
                          service.platforms ||
                          service.tools ||
                          service.providers
                        )?.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-accent/40 text-gray-400 px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="services-pagination absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Bulb component */}
      <Bulb />
    </div>
  );
};

export default Services;
