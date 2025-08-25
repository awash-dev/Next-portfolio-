import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import ParticlesContainer from "../components/ParticlesContainer";
import { fadeIn } from "../variants";

const Home = () => {
  const [techStackIndex, setTechStackIndex] = useState(0);
  const [activeCode, setActiveCode] = useState("express");

  const techStacks = [
    { name: "Python", short: "py", frameworks: ["Django", "Flask", "FastAPI"] },
    {
      name: "JavaScript",
      short: "js",
      frameworks: ["Node.js", "Express.js", "Next.js", "React Native"],
    },
    { name: "Go", short: "go", frameworks: ["Golang", "Gin", "Echo"] },
  ];

  const codeSamples = {
    express: `const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello Express!'));\napp.listen(3000);`,
    python: `from fastapi import FastAPI\napp = FastAPI()\n@app.get("/")\nasync def root(): return {"message": "Hello FastAPI!"}`,
    golang: `package main\nimport (\n\t"fmt"\n\t"net/http"\n)\nfunc handler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintln(w, "Hello Go!")\n}\nfunc main() {\n\thttp.HandleFunc("/", handler)\n\thttp.ListenAndServe(":3000", nil)\n}`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTechStackIndex((prev) => (prev + 1) % techStacks.length);
      setActiveCode(Object.keys(codeSamples)[(techStackIndex + 1) % techStacks.length]);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [techStackIndex]);

  const currentTech = techStacks[techStackIndex];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-cyan-900/20 pointer-events-none"></div>

      {/* ParticlesContainer */}
      <ParticlesContainer className="absolute inset-0 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 xl:px-0 py-16 mt-10 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-12">
        {/* Left Side: Text + Code */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="text-2xl xl:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
          >
            Building Scalable Backends with Precision
          </motion.h1>

          {/* Tech Stack */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">
                  {currentTech.short}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {currentTech.name} Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentTech.frameworks.map((fw, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-800/30 text-blue-300 rounded-full text-sm border border-blue-700/50 backdrop-blur-sm"
                >
                  {fw}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            className="bg-gray-900/80 backdrop-blur-md max-w-[400px] rounded-lg p-4 overflow-auto shadow-xl border border-gray-700/30 mt-1"
          >
            <pre className="text-xs md:text-sm text-gray-200 font-mono whitespace-pre-wrap">
              <code>
                {activeCode === "express" && (
                  <span className="text-green-400">{codeSamples.express}</span>
                )}
                {activeCode === "python" && (
                  <span className="text-yellow-400">{codeSamples.python}</span>
                )}
                {activeCode === "golang" && (
                  <span className="text-blue-400">{codeSamples.golang}</span>
                )}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-8 py-4 flex justify-end items-end">
        <div className="xl:flex hidden  items-center space-x-2 bottom-10">
          <ProjectsBtn />
        </div>
        <div className="flex items-center max-h-[450px]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
