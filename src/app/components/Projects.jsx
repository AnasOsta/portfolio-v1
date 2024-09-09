"use client";
import React, { useState } from "react";
import ProjectCart from "./ProjectCart";
import ProjectTag from "./ProjectTag";
const PROJECT_DATA = [
  {
    id: 1,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
  {
    id: 2,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
  {
    id: 3,
    imgUrl: "https://via.placeholder.com/300",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/anas-gharbi",
    previewUrl: "https://anas-gharbi.github.io/portfolio-v1/",
  },
];

export default function Projects() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (tag) => {
    setTag(tag);
  };

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="flex flex-row justify-center gap-2 items-center  py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid grid-cols-1 md:gap-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCart
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
}
