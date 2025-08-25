import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { fadeIn } from "../../variants";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAward,
  FaDownload,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiFlask,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiSqlalchemy,
  SiMysql,
  SiGo,
  SiPython,
} from "react-icons/si";

// About Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiTailwindcss key="tailwind" />,
          <SiSass key="sass" />,
        ],
      },
      {
        title: "Back-End",
        icons: [
          <SiNodedotjs key="nodejs" />,
          <SiExpress key="express" />,
          <SiFlask key="flask" />,
          <SiTypescript key="typescript" />,
          <SiDjango key="django" />,
          <SiPython key="python" />,
          <SiGo key="go" />,
        ],
      },
      {
        title: "Database",
        icons: [
          <SiMongodb key="mongodb" />,
          <SiMysql key="mysql" />,
          <SiSqlalchemy key="sqlalchemy" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Amibara Store Code", stage: "2025" },
      { title: "Amibara Furniture", stage: "2025" },
      { title: "M07 Top-up System Integration", stage: "2023" },
      { title: "Fast Food Backend API", stage: "2025" },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        img: "/py-fi.png",
        title: "Python Financial",
        issuer: "solo learn",
        date: "2022",
      },
      {
        img: "/full-flask.png",
        title: "Flask Web Development",
        issuer: "mind luster",
        date: "2023",
      },
      {
        img: "/py-in.png",
        title: "Python Intermediate",
        issuer: "solo learn",
        date: "2022",
      },
      {
        img: "/pydata.png",
        title: "Data science with Python",
        issuer: "solo learn",
        date: "2022",
      },
      {
        img: "/react-redux.png",
        title: "React & Redux",
        issuer: "solo learn",
        date: "2022",
      },
      {
        img: "/responsive.png",
        title: "Responsive Web Design",
        issuer: "solo learn",
        date: "2022",
      },
      {
        img: "/mobile-dev.png",
        title: "Mobile Development",
        issuer: "mind luster",
        date: "2023",
      },
      {
        img: "/pydatas.png",
        title: "Python data structures & algorithms",
        issuer: "solo learn",
        date: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0); // Current tab index
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Open modal with selected certificate
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="h-full bg-primary/30 py-20 mt-20 text-center xl:text-left relative overflow-hidden">
      <Circles />

      {/* About Avatar */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row xl:pl-40 gap-x-6 xl:z-30 z-30">
        {/* About Text */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center xl:ml-10"
        >
          <h2 className="h2 xl:text-[32px] text-[24px] -mt-16 xl:-mt-8">
            Full-Stack <span className="text-accent">Developer</span>
          </h2>
          <div className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 flex flex-col gap-4">
            <div className="text-sm xl:text-lg">
              Hi there! 👋 I'm{" "}
              <strong className="text-white">Mohammed Hussen</strong>, a
              fullstack web developer.
            </div>
            <div>
              <motion.a
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                href="/mame cv2.pdf"
                download
                className="inline-flex items-center gap-2 border-2 py-2 px-4 rounded text-white transition-all duration-300 hover:bg-accent hover:border-accent"
              >
                <FaDownload className="text-sm" /> Download Resume
              </motion.a>
            </div>

            {/* Counter */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 2, ease: "easeIn" }}
              className="flex flex-wrap justify-center xl:gap-x-6 -mt-3 xl:mt-6"
            >
              {/* Years of Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 text-center">
                <div className="text-sm xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={2} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 text-center">
                <div className="text-sm xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={-6} end={3} duration={2} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clients
                </div>
              </div>

              {/* Finished Projects */}
              <div className="relative flex-1 text-center">
                <div className="text-sm xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={38} duration={2} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Info Tabs */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[580px] -mt-6">
          {/* Tab Buttons */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6 xl:mb-8 overflow-x-auto"
          >
            {aboutData.map((item, idx) => (
              <button
                key={idx}
                className={`${
                  index === idx
                    ? "text-accent after:w-full after:bg-accent"
                    : "text-white/50 after:w-8 after:bg-white/20"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 pb-2`}
                onClick={() => setIndex(idx)}
              >
                {item.title}
              </button>
            ))}
          </motion.div>

          {/* Info Content - Added scrolling for mobile */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200"
          >
            {aboutData[index].title === "skills" &&
              aboutData[index].info.map((item, idx) => (
                <div key={idx} className="w-full">
                  <h4 className="text-accent text-sm xl:text-lg mb-2">{item.title}</h4>
                  <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                    {item.icons.map((icon, i) => (
                      <div
                        key={i}
                        className="xl:text-3xl text-sm text-white/80 hover:text-accent transition-colors"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {aboutData[index].title === "experience" &&
              aboutData[index].info.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-x-2 items-start text-white/80 group hover:bg-white/5 xl:p-3 rounded-lg transition-all"
                >
                  <div className="flex-1 font-medium group-hover:text-white  -mt-3 xl:-mt-0">
                    {item.title}
                  </div>
                  <div className="md:ml-2 text-accent">{item.stage}</div>
                </div>
              ))}

            {aboutData[index].title === "credentials" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {aboutData[index].info.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 rounded-lg p-3 cursor-pointer group border border-white/10 hover:border-accent/30 transition-all"
                    onClick={() => openModal(cert)}
                  >
                    <div className="relative h-32 mb-3 overflow-hidden rounded-md">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-white text-sm font-medium mb-1 line-clamp-1">
                      {cert.title}
                    </h4>
                    <p className="text-white/60 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-accent text-xs">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal for certificate details */}
      {isModalOpen && selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-accent">{selectedCertificate.issuer}</p>
                  <p className="text-white/60 text-sm mt-1">
                    Issued: {selectedCertificate.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-white text-2xl transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="flex justify-center mb-6">
                <img
                  src={selectedCertificate.img}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[300px] object-contain rounded-lg border border-white/10"
                />
              </div>

              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-lg transition-colors">
                  <FaDownload className="text-sm" /> Download Certificate
                </button>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors">
                  <FaAward className="text-sm" /> Verify Credential
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
