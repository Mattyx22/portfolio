import React, { useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "@/styles/TopSection.module.css";

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



  return (
    <div id="home">
     <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #ebebeb 0%,
            transparent 100%
          );
        }
      `}</style>
    <div ref={heroRef} className="hero">
    <Container fluid>
    <Row className={styles.height100}>
          <Col xs={12} md={6}>
            <Row className={styles.paddingTextRow}>
              <h1 className={styles.title}>I develop ideas for the web.</h1>
              <p className={styles.description}>
                Hi! I’m Mateusz Komar. Passionate about creating dynamic and
                responsive user interfaces that deliver an outstanding user
                experience.
              </p>
            </Row>
            <Row className={styles.paddingLeft6}>
              <div className={styles.worksButton}>
                <a href="#works">See my works.</a>
              </div>
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
          <Col
            xs={12}
            md={6}
            className={`${styles.paddingRight6} ${styles.positionRelative} ${styles.rightPanel}`}
          >
            <div className={styles.circle}></div>
            <motion.div
              className={styles.square}
              drag
              dragConstraints={{
                top: -100,
                left: -100,
                right: 50,
                bottom: 50,
              }}
            />
            {/* <div className={styles.square}></div> */}
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default TopSection;
