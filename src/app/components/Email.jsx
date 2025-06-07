"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "./Input";

export default function Email() {
  const [sendEmail, setSendEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSendEmail(false);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setSendEmail(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2">Let’s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out with any questions or collaboration ideas. I’m
          always open to connecting with new people!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/AnasOsta" target="_blank">
            <Image src={GithubIcon} alt="GitHub profile" />
          </Link>
          <Link href="https://www.linkedin.com/in/anas-osta/" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn profile" />
          </Link>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            title={"Email"}
            name="email"
            type="email"
            placeholder="Your email"
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
            placeholder="Your message"
          />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-hover"
            } text-white font-bold py-2.5 px-5 rounded-lg w-full transition duration-300`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sendEmail && (
            <p className="text-green-500 text-sm mt-2">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
