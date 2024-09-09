"use client";
import React, { useState, useRef } from "react";
import ProjectCart from "./ProjectCart";
import ProjectTag from "./ProjectTag";

import { motion, useInView } from "framer-motion";
const PROJECT_DATA = [
  {
    id: 1,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Test1"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
  {
    id: 2,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Test1"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
  {
    id: 3,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Test2"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
];
const cartVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Projects() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (tag) => {
    setTag(tag);
  };

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="flex flex-row justify-center gap-2 items-center  py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Test1"
          onClick={handleTagChange}
          isSelected={tag === "Test1"}
        />
        <ProjectTag
          name="Test2"
          onClick={handleTagChange}
          isSelected={tag === "Test2"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:gap-12 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            transition={{ duration: 0.3, delay: 0.4 * index }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cartVariants}
            key={index}
          >
            <ProjectCart
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
