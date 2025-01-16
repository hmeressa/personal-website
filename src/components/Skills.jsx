import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillsBackend, skillsFrontend, skillsDevops } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Skill = ({ title, data, style }) => {
  return (
    <motion.div whileInView={"visible"} className={style}>
      <h2 className="text-3xl font-bold">{title} </h2>
      <div className="mt-8 space-y-4">
        {data.map((skill, index) => (
          <div key={index} className="w-64">
            <motion.h3
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
              className="text-xl font-bold text-gray-100"
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Skills</h3>
      </motion.div>
      <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 md:justify-evenly md:items-start gap-4 md:gap-8 mt-8">
        <Skill
          title={"Backend Skills"}
          data={skillsBackend}
          style={"md:col-span-1 md:col-start-1"}
        />
        <Skill
          title={"Frontend Skills"}
          data={skillsFrontend}
          style={"md:col-span-1 md:col-start-2"}
        />
        <Skill
          title={"DevOps Skills"}
          data={skillsDevops}
          style={"md:col-span-1 md:col-start-3"}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
