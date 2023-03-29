import React, { useRef, useEffect } from "react";
import styles from "@/styles/Experience.module.css";

import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const controls = useAnimation();

  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const variants = {
    offscreen: {
      width: "100vw",
      height: "100vh",
      stagger: 10,
    },
    onscreen: {
        width: "20vw",
        height: "20vw",
        borderRadius: "100%",
      transition: {
        borderRadius: "100%",
        
        duration: 2,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
