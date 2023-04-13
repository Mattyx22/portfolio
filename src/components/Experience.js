import React, { useRef, useEffect, useState } from "react";
import styles from "@/styles/Experience.module.css";

import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";

import ExperienceList from "./partials/ExperienceList";

const Experience = () => {

  const targetRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const variants = {
    onscreen: {
      width: "100vw",
      maxHeight: "10vh",
      minHeight: "10vh",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
      backgroundColor: "black",
    },
    offscreen: {
      width: "100vw",
      maxHeight: "10vw",
      minHeight: "10vh",
      borderTopLeftRadius: "100%",
      borderTopRightRadius: "100%",
    },
    backgroundColor: "white",
  };


  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky"
  });

  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [1,1,0])

  const xExp = useTransform(scrollYProgress, [0.2, 0.5, 0.7, 1], ["100%", "0%", "0%", "-100%"]);
  const opacityExp = useTransform(scrollYProgress, [0.3, 0.45, 0.70, 1], [0, 1, 1, 0])

  return (
    <div ref={targetRef} id="experience">
      <div className={`d-flex justify-content-center align-items-center`}>
        <AnimatePresence>
          <motion.div
            className={styles.circle}
            initial="offscreen"
            whileInView="onscreen"
            variants={variants}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            ref={targetRef}
          >
          </motion.div>
        </AnimatePresence>

      </div>
      <div className={styles.height}>
        <motion.h2 className={styles.sectionTitle} style={{position, top: "10vh", opacity: titleOpacity}}>Experience.</motion.h2>
        <motion.div className={styles.experienceList} style={{ x: xExp, position, opacity: opacityExp }}>
          <ExperienceList />
        </motion.div>
      </div>
    </div>

  );
};

export default Experience;