import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import styles from "@/styles/About2.module.css";
import Image from "next/image";

export const About2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );
  const shouldUseReducedMotion = useReducedMotion();

  return (
    <section
      className={`scroll-container ${styles.section}`}
      ref={containerRef}
    >
      <div className="copy">
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="img-container">
        <div className={styles.copy}>
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={styles.imgContainer}>
          <motion.div
            className="img-inner"
            style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}
          >
            {!shouldUseReducedMotion && (
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue }}
              />
            )}
            <Image
              width="500"
              height="500"
              src="/ime.webp"
              alt="a green plant"
              className={styles.img}
            />
            {!shouldUseReducedMotion && (
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About2;
