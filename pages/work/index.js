import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with payment integration.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity app with drag-and-drop interface.",
    image: "/project2.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard with real-time metrics.",
    image: "/project3.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
    category: "dashboard",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description: "Reservation system with table management.",
    image: "/project4.jpg",
    technologies: ["Vue.js", "Express", "MySQL"],
    category: "web",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Mobile app for workout tracking.",
    image: "/project5.jpg",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    category: "mobile",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio with project showcase.",
    image: "/project6.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "web",
    link: "#",
    github: "#",
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
      : projectsData.filter((project) => project.category === activeFilter);

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
            className="w-full xl:max-w-[80%] overflow-y-auto max-h-[calc(100vh-80px)]" // Added scrolling and height constraints
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
                  {/* Project Image - Reduced Height */}
                  <div className="h-36 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-2xl text-white/30">
                        Project {project.id}
                      </span>
                    </div>
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
