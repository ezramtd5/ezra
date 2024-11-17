import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaDownload, FaGlobe } from "react-icons/fa";

const Education = () => {
  // Directly defining the file URLs inside the Education component
  const file1 = "/files/Univ.pdf";
  const file2 = "/files/Newland.pdf";
  const file3 = "/files/Skimming_Protection_Solution.pdf";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Header */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        
        {/* Resume Cards */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of St. Mary's (Oct 2018 - July 2022)"
            result="3.34/4"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Download Here &nbsp;
                <a href={file1} download="UniversityDegree.pdf" target="blank">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaDownload />
                  </span>
                </a>
              </>
            }
          />

          <ResumeCard
            title="Google Cybersecurity"
            subTitle="Coursera (Feb 2024 - Oct 2024)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://www.coursera.org/account/accomplishments/specialization/XJUND4D9QFR4?trk=public_profile_certification-title" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />

          <ResumeCard
            title="Meta Database Engineer Specialization"
            subTitle="Coursera (Feb 2024 - Oct 2024)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://www.coursera.org/account/accomplishments/specialization/9JFT28MBA6CO?trk=public_profile_certification-title" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />
        </div>

        {/* Additional Resume Cards */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analysis Fundamentals"
            subTitle="University of St. Mary's (2018 - 2022)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://www.udacity.com/certificate/e/290ca582-4d6e-11ef-8c42-17866ef3d00a" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />

          <ResumeCard
            title="Android Developer Fundamentals"
            subTitle="SuperKing College (2001 - 2005)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://www.udacity.com/certificate/e/1104759a-516b-11ef-b342-5fe628a671c1" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />

          <ResumeCard
            title="Programming Fundamentals"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://www.udacity.com/certificate/e/1cdac848-516a-11ef-91ac-1b2d476dc925" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />
        </div>

        {/* Final Section */}
        <div className="mt-6 lgl:mt-4 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SOFTWARE TRAINING COURSE ON ALL NEWLAND PRODUCT FAMILY"
            subTitle="NewLand (May 2023 - Aug 2023)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Download Here &nbsp;
                <a href={file2} download="NewLand.pdf">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaDownload />
                  </span>
                </a>
              </>
            }
          />
          <ResumeCard
            title="Tailwind CSS"
            subTitle="Coursera (Jun 2024 - Sept 2024)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Visit Here &nbsp;
                <a href="https://coursera.org/verify/K3VNF0SQ83WF" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </>
            }
          />

          <ResumeCard
            title="Skimming Protection Solution"
            subTitle="Coursera (Apr 2024 - Sept 2024)"
            result="Success"
            des={
              <>
                The training provided by universities to prepare people for various sectors of the economy or cultural areas. <br /><br />
                Download Here &nbsp;
                <a href={file3} download="Skimming_Protection_Solution">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaDownload />
                  </span>
                </a>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
