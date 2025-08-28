import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Amibara Store",
    description: "Full-stack e-commerce with payment integration.",
    image: "/store.jpg",
    technologies: ["React Native", "Firebase", "Clerk"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/awash-dev",
  },
  {
    id: 2,
    title: "Dynamic Blog",
    description: "A dynamic blog built with Next.js and Tailwind CSS.",
    image: "/blogs.png",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    category: "Web",
    link: "https://mame-journey.vercel.app/",
    github: "https://github.com/awash-dev",
  },
  {
    id: 3,
    title: "School Attendance System",
    description: "A school attendance system with real-time tracking.",
    image: "/school-atendance.png",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Clerk", "Firebase"],
    category: "Dashboard",
    link: "https://scholls-admin.vercel.app/",
    github: "https://github.com/awash-dev/scholls-admin",
  },
  {
    id: 4,
    title: "Awash Tube API",
    description: "YouTube API integration for video fetching from YouTube.",
    image: "/youtube-api.png",
    technologies: ["Vite.js", "Google Cloud", "YouTube Data API"],
    category: "Web",
    link: "https://awash-tube-api-qwuj.vercel.app/",
    github: "https://github.com/awash-dev/AwashTubeApi",
  },
  {
    id: 5,
    title: "E-learning Dashboard",
    description:
      "A comprehensive dashboard for managing e-learning courses and users.",
    image: "/e-learnig-dash.png",
    technologies: ["Vite.js", "Clerk", "MongoDB", "Chart.js"],
    category: "Dashboard",
    link: "https://builder-neon-landing.vercel.app/admin",
    github: "https://github.com/awash-dev",
  },
  {
    id: 6,
    title: "Digital Lab",
    description: "A virtual lab environment for conducting experiments.",
    image: "/digital-lab.png",
    technologies: ["HTML", "JavaScript", "CSS"],
    category: "Web",
    link: "https://awash-dev.github.io/library/",
    github: "https://github.com/awash-dev/library",
  },
  {
    id: 7,
    title: "Amibara Furniture",
    description: "Full-stack e-commerce with payment integration.",
    image: "/furniture.jpg",
    technologies: ["React Native", "Firebase", "Clerk"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/awash-dev",
  },
];

// Filter options
const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "dashboard", label: "Dashboards" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category.toLowerCase() === activeFilter
        );

  return (
    <div className="h-full bg-primary/30 py-12 flex items-center overflow-hidden relative">
      <Circles />

      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col xl:flex-row gap-x-6 h-full">
          {/* Text Content - Reduced Size */}
          <div className="text-center xl:text-left xl:w-[20%] flex flex-col justify-center mb-6 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-4 text-2xl mt-12 xl:mt-0 xl:text-3xl"
            >
              My <span className="text-accent">Work</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[300px] mx-auto xl:mx-0 text-white/80 text-sm"
            >
              A collection of my latest projects and creative solutions.
            </motion.p>

            {/* Enhanced Category Filters */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:block"
            >
              <h3 className="text-md font-semibold text-white mb-3">
                Filter Projects
              </h3>
              <div className="flex flex-col gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`text-left py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                      activeFilter === option.id
                        ? "bg-accent text-white shadow-lg"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <div className="mt-4 text-xs text-white/50">
                Showing {filteredProjects.length} of {projectsData.length}{" "}
                projects
              </div>
            </motion.div>
          </div>

          {/* Projects Grid - Increased Width */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[80%] overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            {/* Mobile Filter - Only visible on small screens */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="xl:hidden mb-6"
            >
              <h3 className="text-md font-semibold text-white mb-2 text-center">
                Filter Projects
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`py-1.5 px-3 rounded-lg transition-all duration-300 text-xs ${
                      activeFilter === option.id
                        ? "bg-accent text-white shadow-lg"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Responsive Grid for Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group h-full flex flex-col"
                >
                  {/* Project Image - Updated to use <img> */}
                  <div className="h-36 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="text-xs bg-accent/90 text-white px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content - Compact */}
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-md font-bold text-white mb-1 group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-white/70 mb-2 text-xs leading-relaxed flex-grow line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-white/10 text-white/80 px-1.5 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs bg-white/10 text-white/80 px-1.5 py-0.5 rounded-full">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.link}
                        className="flex-1 bg-accent hover:bg-accent/90 text-white text-center py-1 rounded transition-colors text-xs"
                      >
                        View
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-1 rounded transition-colors text-xs"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bulb component */}
      <Bulb />
    </div>
  );
};

export default Work;
