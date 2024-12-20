import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiDjango } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer .", "Full Stack Developer .", "Database Engineer .", "UI Designer ."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ezra Mekuria</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am Ezra Mekuria, a dedicated software engineer with a passion for continuous learning and innovation. As a freelancer, I strive to deliver exceptional results that drive success and satisfaction for my clients. Currently, I work at Moti Engineering as a Software Engineer, where I have successfully completed numerous projects and continue to contribute to ongoing developments. Looking ahead, I am excited to broaden my expertise in the fields of Software Engineering.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://instagram.com/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://facebook.com/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://twitter.com/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://react.dev/" target="blank">
            <span className="bannerIcon">
              <FaReact />
            </span>
            </a>
            <a href="https://www.djangoproject.com/" target="blank">
            <span className="bannerIcon">
              <SiDjango />
            </span>
            </a>
            <a href="https://tailwindcss.com/" target="blank">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            </a>
            <a href="https://www.figma.com/" target="blank">
            <span className="bannerIcon">
              <SiFigma />
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
