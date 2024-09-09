"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center md:text-left"
        >
          <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, Im{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Anas",
                1000,
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsum officiis saepe quidem ullam rerum aperiam nihil voluptatibus
            voluptatum.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:from-secondary hover:to-primary text-black transform bg-gradient-to-r from-primary to-secondary">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-hover text-white border-white border mt-3">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <img
              src={"https://via.placeholder.com/300"}
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
