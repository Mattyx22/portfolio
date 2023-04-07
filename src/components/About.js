import React, { useRef, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/About.module.css';
import { useScroll, useTransform, motion } from 'framer-motion';

const About = () => {

    const [windowSize, setWindowSize] = useState(0)

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        setWindowSize(window.innerWidth)

        if (windowSize > 992) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }

        console.log(windowSize)
    }, [windowSize])


    const titleOffset = isMobile ? "-5%" : "-43%";

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const scaleTitle = useTransform(scrollYProgress, [0.05, 0.15, 0.2, 0.25], [0, 1.5, 1.5, 1]);

    const opacityTitle = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        ["100%", "0%"]
    );


    const xTitle = useTransform(
        scrollYProgress,
        [0.45, 0.55, 0.9, 1],
        ["0%", titleOffset, titleOffset, "-100%"]
    );

    const yTitle = useTransform(scrollYProgress, [0.2, 0.3], ["0%", "-35%"]);


    const opacityDescription = useTransform(scrollYProgress, [0.35, 0.4, 0.45, 0.55], [0, 1, 1, 0]);


    const opacitySkills = useTransform(scrollYProgress, [0.60, 0.7, 0.9, 1], [0, 1, 1, 0])

    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "sticky"
    });


    return (
        <div id="about">
            <Container className={styles.containerHeight} ref={targetRef}>
                <motion.h2 className={`${styles.sectionTitle} d-flex justify-content-center align-items-center`} style={{ y: yTitle, x: xTitle, opacity: opacityTitle, scale: scaleTitle, position, top: "0vh", height: "100vh" }}>
                    About.
                </motion.h2>
                <motion.div className={`text ${styles.center}`} style={{ opacity: opacityDescription, position, top: "27vh" }}>
                    <p className="mt-8 text">
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
                    </p>
                </motion.div>

                <motion.div className={`${styles.skills}`} style={{ opacity: opacitySkills, position, top: "27vh", left: "50%" }}>
                    <h4 className="mb-3">Developing</h4>
                    <div>
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
                    </div>
                    <h4 className="mt-5 mb-3">Design</h4>
                    <div>
                        <Row>
                            <Col>
                                <p>Photoshop</p>
                                <p>Figma</p>
                            </Col>
                            <Col>
                                <p>Adobe XD</p>
                            </Col>
                        </Row>
                    </div>
                </motion.div>

            </Container>
        </div>

    )
}

export default About