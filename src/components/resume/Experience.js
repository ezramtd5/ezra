import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Moti Engineering PLC - (Mar 2023 - Present)"
            result="Ethiopia"
            des="Responsible for updating software and firmware, configuring, and installing ATM and POS hardware and software. Troubleshoot and resolve software issues while collaborating with vendors and development teams for complex problems. Maintain close communication with the IT team to ensure seamless technical operations."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Federal Supreme Court - (Nov 2020 - Nov 2022)"
            result="Ethiopia"
            des="Skilled in developing front-end applications using HTML, CSS,  JavaScript, React, React Native and back-end programming with PHP and DJango. Proficient in database design and configuration of web servers for deployment. Ensures seamless integration of front-end and back-end systems for robust web solutions."
          />
          <ResumeCard
            title="Data Analyst"
            subTitle="Bogale Tessema Building Contractor (Jul 2022 - Mar 2023)"
            result="Ethiopia"
            des="Experienced in interpreting complex datasets to drive strategic decisions. With expertise in data cleaning, analysis, and visualization, they uncover actionable insights and trends. Proficient in tools like SQL, Python, and BI platforms, they ensure data-driven success for organizations."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
