import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Skills = ({ children }) => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const containerValue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref}>
      <motion.div
        className="test"
        style={{
          translateY: containerValue,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Skills;
