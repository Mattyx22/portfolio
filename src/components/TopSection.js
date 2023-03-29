import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import styles from "@/styles/TopSection.module.css";

const TopSection = () => {
  return (
    <>
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
    </>
  );
};

export default TopSection;
