import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="XOKA IT ( Aug 2022 - Jan 2023)"
            result="Ethiopia"
            des="Front-End Developer training in React.js provides hands-on experience in building dynamic, user-friendly web applications. Learn key concepts like components, state management, hooks, and routing to create responsive and scalable interfaces. Master industry-relevant skills to excel in modern web development."
          />
          <ResumeCard
            title="SOFTWARE TRAINING ON ALL NEWLAND PRODUCT FAMILY"
            subTitle="NewLand (May 2023 - Aug 2023)"
            result="Ethiopia"
            des="Comprehensive software training on all Newland product families equips users with the skills to operate and optimize devices effectively. This training covers installation, configuration, troubleshooting, and advanced features to ensure seamless integration into various workflows. Gain practical insights to maximize performance and efficiency."
          />
          <ResumeCard
            title="PHP Developer"
            subTitle="St. Mary's University ( Mar 2023 - Jun 2023)"
            result="Ethiopia"
            des="PHP Developer training focuses on mastering server-side programming to build dynamic and robust web applications. Learn PHP syntax, database integration, and frameworks like Laravel to create scalable solutions. Gain practical skills to excel in modern web development."
          />
        </div>
      </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
