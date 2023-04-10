import React, { useRef, useEffect, useState } from "react";
import styles from "@/styles/Experience.module.css";

import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";

import ExperienceList from "./partials/ExperienceList";

const Experience = () => {
  const [windowSize, setWindowSize] = useState(0)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    setWindowSize(window.innerWidth)

    if (windowSize > 992) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

    console.log(windowSize)
  }, [windowSize])

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

  const titleOffset = isMobile ? "0%" : "-30%";
  const xTitle = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 1], ["0%", titleOffset, titleOffset, "-100%"]);

  const xExp = useTransform(scrollYProgress, [0.2, 0.5, 0.7, 1], ["100%", "0%", "0%", "-100%"]);
  const opacityX = useTransform(scrollYProgress, [0.3, 0.45, 0.70, 1], [0, 1, 1, 0])

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
        <motion.h2 className={styles.sectionTitle} style={{ x: xTitle, position, top: "10vh" }}>Experience.</motion.h2>
        <motion.div className={styles.experienceList} style={{ x: xExp, position, opacity: opacityX }}>
          <ExperienceList />
        </motion.div>
      </div>
    </div>

  );
};

export default Experience;