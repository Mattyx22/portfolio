import React, { useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "@/styles/TopSection.module.css";

import bg from '../../public/ideas.jpg';

const TopSection = () => {

  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };


  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 0.2]);

  console.log(bg);

  return (
    <div id="home" className={styles.background}>
      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #3F1C65 0%,
            transparent 100%
          );
        }
      `}</style>
      <div ref={heroRef} className="hero">
        <Container fluid>
          <Row className={styles.height100}>
            <Col xs={12} md={12}>
              <Row className={styles.textRow}>
                <motion.div style={{ scale }}>
                  <h1 className={styles.title}>I develop <div className={styles.animationContainer}>
                    <p style={{ backgroundImage: `url(${bg.src})` }} className={styles.animationContainer}>ideas</p>
                  </div> for the web.</h1>
                  <p className={styles.description}>
                    Hi! I’m Mateusz Komar. Passionate about creating dynamic and
                    responsive user interfaces that deliver an outstanding user
                    experience.
                  </p>
                </motion.div>
              </Row>
              <Row className={`${styles.paddingLeft6} ${styles.linksRow}`}>
                <div className={styles.links}>
                  <a
                    href="https://github.com/mattyx22"
                    className={styles.singleLink}
                  >
                    GitHub
                  </a>
                  <span> / </span>
                  <a href="#" className={styles.singleLink}>
                    CV
                  </a>
                  <span> / </span>
                  <a
                    href="https://www.behance.net/mattygt"
                    className={styles.singleLink}
                  >
                    Behance
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TopSection;
