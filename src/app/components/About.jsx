"use client";
import Image from "next/image";
import React from "react";

import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { about } from "../constants";

export default function About() {
  const [tabs, setTabs] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTabs(tab);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-md"
          src="/images/about.jpg"
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {"I'm"} a full-stack developer with a strong focus on writing clean,
            scalable code. My journey began with mastering the basics, and I’ve
            since built real-world projects using React, Next.js, Tailwind CSS,
            and Prisma. I value clear communication, respect deadlines, and
            strive to deliver solutions that are both practical and
            future-proof.
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
            {about.find((tab) => tab.id === tabs).content}
          </div>
        </div>
      </div>
    </section>
  );
}
