"use client";
import Image from "next/image";
import React from "react";

import { useTransition, useState } from "react";
import TabButton from "./TabButton";

export default function About() {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>.....</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Experience 1</li>
          <li>Experience 2</li>
          <li>Experience 3</li>
          <li>.....</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Education 1</li>
          <li>Education 2</li>
          <li>Education 3</li>
          <li>.....</li>
        </ul>
      ),
    },
  ];

  const [tabs, setTabs] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTabs(tab);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <img src={"https://via.placeholder.com/600"} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsum officiis saepe quidem ullam rerum aperiam nihil voluptatibus
            voluptatum.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tabs === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tabs === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              Experience
            </TabButton>
            <TabButton
              active={tabs === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {" "}
            {TAB_DATA.find((tab) => tab.id === tabs).content}
          </div>
        </div>
      </div>
    </section>
  );
}
