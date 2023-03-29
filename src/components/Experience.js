import React, { useRef, useEffect } from "react";
import styles from "@/styles/Experience.module.css";

import { useRecoilState } from "recoil";
import { navBackgroundColor } from "@/atoms/navbar";

import { motion, useInView, AnimatePresence, useScroll } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const variants = {
    onscreen: {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    offscreen: {
      width: "0vw",
      height: "0vw",
      borderRadius: "100%",
    },
  };

  const [bgColor, setBgColor] = useRecoilState(navBackgroundColor);

  const background = () => {};

  useEffect(() => {
    if (isInView) {
      setBgColor("#000000");
    } else {
      setBgColor("#ffffff");
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <AnimatePresence>
        <motion.div
          className={styles.circle}
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          // style={{scale: imageValue, borderRadius: imageValue}}
          ref={ref}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Experience;
