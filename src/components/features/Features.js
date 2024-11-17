import React from 'react'
import { AiFillAppstore,AiFillDatabase,AiOutlineLaptop } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Developer"
          des="A full-stack developer specializes in both front-end and back-end development, enabling them to build complete, end-to-end web applications."
          icon={<AiOutlineLaptop />}
        />
        <Card
          title="App Development"
          des="App development plays a crucial role in creating tailored software solutions that enhance user experience and streamline processes."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Database Design"
          des="Database designer is responsible for structuring and organizing data to ensure efficient storage, retrieval, and management."
          icon={<AiFillDatabase />}
        />
        <Card
          title="Mobile Development"
          des="Mobile development involves creating applications specifically designed for mobile devices and offering seamless functionality."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="UX design focuses on creating intuitive, user-friendly experiences that meet user needs and enhance satisfaction. "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Hosting websites provides the infrastructure and services needed to make websites accessible on the internet."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features