import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { SplitText } from "./SplitText";

const AnimatedText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={ref}
      >
        <SplitText
          initial={{ y: "100%" }}
          animate={controls}
          variants={{
            visible: (i) => ({
              y: 0,
              transition: {
                delay: i * 0.1,
              },
            }),
          }}
        >
          {children}
        </SplitText>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;
