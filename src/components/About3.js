import React, {useRef} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/About3.module.css';
import { useScroll, useTransform, motion } from 'framer-motion';

const About3 = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const x = useTransform(
        scrollYProgress,
        [0, 0.7],
        ["-60%", "0%"]
      );

    
      const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 1, 0]);

      const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "sticky"
      });
    

  return (
    <Container className={styles.containerHeight} ref={targetRef}>
        <motion.h2 className="sectionTitle" style={{x, scale, position, top: "10vh"}}> 
                About.
            </motion.h2>
        <Row>
        
        <Col xs={12} md={7} className={styles.paddingRight10}>
            
                  {/* <h2 className="sectionTitle">About.</h2> */}
                  {/* <p className="mt-8 text">
                    My love for web development started when I was in primary
                    school, and since then I have created a numerous websites
                    both as a hobby and at work.
                  </p>
                  <p className="mt-10 mb-8 text">
                    I am proficient in various essential web development
                    technologies such as HTML, CSS, JavaScript, WordPress, and
                    React, and I am always eager to learn new things and explore
                    new possibilities. Recently, I have embarked on a new
                    learning journey, and I am currently expanding my skills by
                    delving into the world of Flutter.
                  </p> */}
              </Col>
              <Col xs={12} md={5} className={styles.paddingRightPanel}>
                  {/* <h4 className="mb-3">Developing</h4>
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
                  </Row> */}
              </Col>
        </Row>
    </Container>
  )
}

export default About3