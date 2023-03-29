import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/About.module.css";

import RevealText from "./partials/RevealText";
import DivBackground from "./partials/DivBackground";
import Skills from "./partials/Skills";
import AnimatedText from "./partials/AnimatedText";

const About = () => {
  const gray = "#f8f8f8";
  const white = "#ffffff";

  return (
    <>
      <DivBackground startEndColor={gray} mainColor={white}>
        <section id="about">
          <Container>
            <Row>
              <Col xs={12} md={7} className={styles.paddingRight10}>
                <RevealText>
                  <h2 className="sectionTitle">About.</h2>
                </RevealText>
                <RevealText>
                  <p className="mt-8 text">
                    My love for web development started when I was in primary
                    school, and since then I have created a numerous websites
                    both as a hobby and at work.
                  </p>
                </RevealText>

                <RevealText>
                  <p className="mt-10 mb-8 text">
                    I am proficient in various essential web development
                    technologies such as HTML, CSS, JavaScript, WordPress, and
                    React, and I am always eager to learn new things and explore
                    new possibilities. Recently, I have embarked on a new
                    learning journey, and I am currently expanding my skills by
                    delving into the world of Flutter.
                  </p>
                </RevealText>
              </Col>
              <Col
                xs={12}
                md={5}
                className={styles.paddingRightPanel}
              >
                <Skills>
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
                </Skills>
              </Col>
            </Row>

            <Row>
            
              <div className={`mt-8 mb-10 ${styles.bottomText}`}>
              <AnimatedText>
                  I am excited about the new opportunities that this knowledge
                  will bring me and cant wait to see what I can create
                  with it.
                  </AnimatedText>
              </div> 
            </Row>
          </Container>
        </section>
      </DivBackground>
    </>
  );
};

export default About;
