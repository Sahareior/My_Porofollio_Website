import React from "react";
import { Progress } from "react-sweet-progress";
import "./stlyle.css";
import "react-sweet-progress/lib/style.css";
import { styles } from "../../styles";
import { motion } from "framer-motion";

const Skills = () => {
  
  const technologies = [
    { name: "HTML 5", percentage: 80 },
    { name: "CSS 3", percentage: 75 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 10 },
    { name: "React JS", percentage: 85 },
    { name: "Express JS", percentage: 70 },
    { name: "Next JS", percentage: 50 },
    { name: "Tailwind CSS", percentage: 70 },
    { name: "Node JS", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "Three JS", percentage: 65 },
    { name: "git", percentage: 90 },
    { name: "figma", percentage: 80 },
  ];

  return (
    <div id="skills" className="text-center p-10 mt-28">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.sectionSubText}
      >
        Checkout my skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={styles.sectionHeadText}
      >
        My Key Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="md:grid mt-10 grid-cols-2 gap-10 md:ml-32"
      >
        {technologies.map((data) => (
          <div key={data.name} className="md:mr-32 mt-5">
            <p className="text-white">{data.name}</p>
            <div className="progress2 progress-moved">
             
              <div
                className="progress-bar2"
                style={{
                  width: `${data.percentage}%`,
                  backgroundColor: "#f3c623",
                }}
              ></div>
           
             
            </div>
         
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
