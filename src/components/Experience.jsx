import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/experience";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <>
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <div className="mt-4">
        <h5 className="text-white text-[12px] font-bold">Position</h5>
        <p className="text-secondary text-[14px]">{experience.position}</p>
      </div>

      <div className="mt-4">
        <h5 className="text-white text-[12px] font-bold">Technology</h5>
        <p className="text-secondary text-[14px]">{experience.technology}</p>
      </div>

      <div className="mt-4">
        <h5 className="text-white text-[12px] font-bold">Address</h5>
        <p className="text-secondary text-[14px]">{experience.address}</p>
      </div>

      <br /><br />

      <div className="mt-2">
        <h5 className="text-white text-[12px] font-bold">Project Overview</h5>
      </div>
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        {experience.overview}
      </div>
      </VerticalTimelineElement>
       </>
  );
};

const Experience = () => {
  return (
    <>
      <motion variants={textVariant() } >
        <h1>What I have done so far</h1>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Experience");
