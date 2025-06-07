"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { words } from "../constants";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col-reverse gap-y-8 lg:grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center md:text-left"
        >
          <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Turning
            </span>{" "}
            <TypeAnimation
              sequence={words}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />{" "}
            <br />
            into impactful digital experiences.
          </h1>

          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Hi, {"I'm"} Anas — a web developer from Syria, passionate about
            crafting thoughtful and impactful digital experiences.
          </p>
          <div>
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:from-secondary hover:to-primary text-black transform bg-gradient-to-r from-primary to-secondary">
                Hire Me
              </button>
            </Link>
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
            <Image
              src="/images/hero.jpeg"
              alt="hero image"
              className="rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
