"use client";
import React, { useState, useRef } from "react";
import ProjectCart from "./ProjectCart";
import ProjectTag from "./ProjectTag";
import { projects } from "../constants";

import { motion, useInView } from "framer-motion";

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

  const filteredProjects = projects.filter((project) =>
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
          name="Client"
          onClick={handleTagChange}
          isSelected={tag === "Client"}
        />
        <ProjectTag
          name="Personal"
          onClick={handleTagChange}
          isSelected={tag === "Personal"}
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
