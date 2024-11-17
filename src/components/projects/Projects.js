import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, PM,  projectFive, Eva, kuku } from "../../assets/index";
import ProjectsCard from './ProjectsCard';



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Kuku-Melekote"
          des=" Kuku Melekote is an online kids Learning platform with an interactive games and progress trackers which focus on Preschool levels."
          src={kuku} link={"https://web.kukumelekote.com/"}
        />
        <ProjectsCard
          title="Moti Engineering"
          des=" Moti Engineering specializes in innovative automation, payment systems, and IT solutions for banking, retail, and government sectors. They offer services like biometric systems, self-service kiosks, and digital payments. The company focuses on secure, efficient, and customer-centric technologies."
          src={projectFive} link={"https://motiengineering.com/serviceone"}
        />
        <ProjectsCard
          title="PM ATM management"
          des=" Preventive Maintenance(PM) is a terminal ATM management system that tracks ATMs and schedules maintenance every three months. The system notifies engineers when it's time for maintenance and allows them to upload photos for record-keeping and verification."
          src={PM}
        />
        <ProjectsCard
          title="Evangadi Forum Dashboard"
          des="Evangadi Forum is an online platform where students can ask questions and receive answers from others in the community. It provides a space for peer-to-peer learning and knowledge sharing across various topics."
          src={Eva} link={"https://evangadi-forum-dashboard.vercel.app/dashboard"}
        />
        <ProjectsCard
          title="Semayi labs"
          des=" We innovate cutting-edge solutions, build advanced technologies, and inspire the future of possibilities."
          src={projectOne} link={"https://company-snowy-xi.vercel.app/"}
        />
        <ProjectsCard
          title="Taza House"
          des=" Taza House is a platform where you can buy a house, sell your property, rent a space by setting preferences and exploring real time listings by connecting with potential buyers or renters."
          src={projectTwo} link={"https://tazahouse.com/"}
        />
      </div>
    </section>
  );
}

export default Projects