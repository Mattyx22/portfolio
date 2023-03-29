import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DivBackground = ({ startEndColor, mainColor, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const background = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    [startEndColor, mainColor, startEndColor]
  );

  return <motion.div style={{ background }}>{children}</motion.div>;
};

export default DivBackground;
