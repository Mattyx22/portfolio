import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/About.module.css'
import { motion } from "framer-motion"

const About = () => {


  return (
    <>
    <motion.div
      className="overlay"
      whileInView={{ backgroundColor: "#ffffff" }}
      initial={{ backgroundColor: "#f8f8f8" }}
      viewport={{ once: true }}
      exit={{
        opacity: 0,
        backgroundColor: "#f8f8f8",
        transition: { backgroundColor: { delay: 1 }, opacity: { delay: 0.1 } }
      }}
      transition={{
        duration: 1,
        delay: 0.5
      }}
    >
    <section  id="about">
    <Container>
        <h2 className="sectionTitle">About.</h2>
        <Row>
          <Col xs={12} md={7} className={styles.paddingRight10}>
          <p className="mt-8 text">
          My love for web development started when I was in primary school, and since then I have created a numerous websites both as a hobby and at work.
          </p>
          <p className="mt-6 text">
          I am proficient in various essential web development technologies such as HTML, CSS, JavaScript, WordPress, and React, and I am always eager to learn new things and explore new possibilities. Recently, I have embarked on a new learning journey, and I am currently expanding my skills by delving into the world of Flutter.
          </p>
          </Col>
          <Col xs={12} md={5} className={`mt-8 ${styles.paddingRightPanel}`}>
            <h4 className="mb-3">Developing</h4>
            <Row>
              <Col>
                <p>HTML 5</p>
                <p>CSS 3</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Express</p>
                <p>Next</p>
                <p>Node.js</p>
              </Col>
              <Col>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Git</p>
                <p>NPM</p>
                <p>Flutter</p>
                <p>Wordpress</p>
                <p>Woocommerce</p>
              </Col>
            </Row>
            <h4 className="mt-5 mb-3">Design</h4>
            <Row>
              <Col>
                <p>Photoshop</p>
                <p>Figma</p>
              </Col>
              <Col>
                <p>Adobe XD</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <p className={`mt-8 mb-8 ${styles.bottomText}`}>I am excited about the new opportunities that this knowledge will bring me and can&apos;t wait to see what I can create with it.</p>
        </Row>
      </Container>
    </section>
    </motion.div>
    </>
  )
}

export default About