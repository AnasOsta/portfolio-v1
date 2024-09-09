"use client";
import { Resend } from "resend";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "./Input";
// import "../../../envConfig.ts";
export default function Email() {
  const [sendEmail, setSendEmail] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSendEmail(true);
      }
      e.target.reset();
    });
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/iamkushal">
            <Image src={GithubIcon} alt="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/kushal/">
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            title={"Email"}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            title={"Subject"}
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <Input
            title={"Message"}
            name="message"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2.5 px-5 rounded-lg hover:bg-purple-600 w-full"
          >
            Send Message
          </button>
          {sendEmail && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
