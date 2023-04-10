import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles/partials/Marquee.module.css";

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = ({ children }) => {
  return (
    <div>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
        >
          <h2>
            {children}
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;