import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { BackendSkills } from "../constants/back-end";
import { DevOpsSkills } from "../constants/dev-ops";
import { FrontendSkills } from "../constants/front-end";

import { fadeIn, textVariant } from "../utils/motion";

const Skill = ({ title, data, style }) => {
  return (
 <motion.div
      whileInView="visible"
    >
      <h2 className="text-4xl font-extrabold text-white">{title}</h2>
      <div className="mt-8 space-y-6">
        {data.map((skill, index) => (
          <div key={index} className="w-full sm:w-72 mx-auto">
            <motion.h3
              initial={{
                opacity: 0,
                y: 30,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.3 + index * 0.2,
                    ease: 'easeOut',
                  },
                },
              }}
              className="text-xl font-bold text-white"
            >
              {skill.title}
            </motion.h3>
            <div className="h-3 w-full bg-gray-300 rounded-full mt-2">
              <motion.div
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1.2,
                      delay: 0.5 + index * 0.2,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: skill.level === 100 ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
              className="absolute inset-0 flex justify-center items-center text-white font-semibold"
            >
              {skill.level === 100 && <span>Perfect!</span>}
            </motion.div>
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
          data={BackendSkills}
          style={"md:col-span-1 md:col-start-1"}
        />
        <Skill
          title={"Frontend Skills"}
          data={FrontendSkills}
          style={"md:col-span-1 md:col-start-2"}
        />
        <Skill
          title={"DevOps Skills"}
          data={DevOpsSkills}
          style={"md:col-span-1 md:col-start-3"}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
