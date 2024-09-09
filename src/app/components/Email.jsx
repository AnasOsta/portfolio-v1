"use client";
import { Resend } from "resend";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "./Input";
// import "../../../envConfig.ts";
export default function Email() {
  const handleSubmit = async (e) => {
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const data1 = Object.fromEntries(formData);
    // const { data, error } = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["ensusta1@gmail.com"],
    //   subject: data1.subject,
    //   react: (
    //     <>
    //       <h1>{data1.subject}</h1>
    //       <p>Thank you for contacting us</p>
    //       <p>{data1.message}</p>
    //     </>
    //   ),
    // });
    // if (error) {
    //   return res.status(400).json(error);
    // }
    // res.status(200).json(data);
    // console.log(data1);
    // const JESONdata = JSON.stringify(data);
    // const response = await fetch("http://localhost:3000/api/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JESONdata,
    // });
    // response;
    // const resData = await response;
    // if (resData.status === 200) {
    //   console.log("Email sent");
    // }
  };
  const test = async () => {
    const resend = new Resend("re_ESfsU3zZ_3uhtp2VDXwQWCpY6PDntKwk5");

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ensusta1@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <button onClick={test}>test</button>
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
          <Input name="Email" type="email" placeholder="Email" />
          <Input name="subject" type="text" placeholder="Subject" />
          <Input name="Message" type="text" placeholder="Message" />
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2.5 px-5 rounded-lg hover:bg-purple-600 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
