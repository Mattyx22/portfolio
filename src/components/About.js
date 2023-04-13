import React, { useRef } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '@/styles/About.module.css';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {

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


    const yTitle = useTransform(scrollYProgress, [0.2, 0.3], ["0%", "-35%"]);


    const opacityDescription = useTransform(scrollYProgress, [0.31, 0.33, 0.42, 0.55], [0, 1, 1, 0]);


    const opacitySkills = useTransform(scrollYProgress, [0.54, 0.56, 0.93, 1], [0, 1, 1, 0])

    const xSkills = useTransform(scrollYProgress, [0.56, 0.98], ["10%", "-100%"]);

    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "sticky"
    });


    return (
        <div id="about" className={styles.containerHeight} ref={targetRef}>
            <Container>
                <motion.h2 className={`${styles.sectionTitle} d-flex justify-content-center align-items-center`} style={{ y: yTitle, opacity: opacityTitle, scale: scaleTitle, position, top: "0vh", height: "100vh" }}>
                    About.
                </motion.h2>


                <Row>
                    <p className={styles.cardTitle}>
                        Languages
                    </p>
                    <Col xs="2">

                        <Image src="/skills/html5.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/css.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/js.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/python.svg" width={64} height={64} />
                    </Col>
                </Row>

                <Row>
                    <p className={styles.cardTitle}>
                        Frameworks and CMSs
                    </p>
                    <Col xs="2">

                        <Image src="/skills/reactjs.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/nextjs.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/nodejs.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/express.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/wordpress.svg" width={64} height={64} />
                    </Col>
                </Row>

                <Row>
                    <p className={styles.cardTitle}>
                        Databases
                    </p>
                    <Col xs="2">

                        <Image src="/skills/mysql.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/mongodb.svg" width={64} height={64} />
                    </Col>
                </Row>

                <Row>
                    <p className={styles.cardTitle}>
                        Tools
                    </p>
                    <Col xs="2">

                        <Image src="/skills/github.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/insomnia.svg" width={64} height={64} />
                    </Col>

                    <Col xs="2">
                        <Image src="/skills/ps.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/figma.svg" width={64} height={64} />
                    </Col>
                    <Col xs="2">
                        <Image src="/skills/xd.svg" width={64} height={64} />
                    </Col>
                </Row>



            </Container>





            {/* <Container className={styles.containerHeight} ref={targetRef}>
                <motion.h2 className={`${styles.sectionTitle} d-flex justify-content-center align-items-center`} style={{ y: yTitle, opacity: opacityTitle, scale: scaleTitle, position, top: "0vh", height: "100vh" }}>
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



                <motion.div className={styles.cardsContainer} style={{ position, top: "40vh", opacity: opacitySkills, x: xSkills }}>
                    <Card className={styles.singleCard}>
                        <Card.Body className={`d-flex align-items-center ${styles.cardBody}`}>

                            <Row className={styles.titleContainer}>
                                <Col sm="12" md="3" className="d-flex justify-content-center align-items-center">
                                    <Image src="/skills/language.png" width="72" height="72" alt="Languages" />
                                </Col>
                                <Col sm="12" md="9">
                                    <p className={styles.cardTitle}>
                                        Languages
                                    </p>
                                    <ul className={styles.skillsList}>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Dart</li>
                                        <li>Python</li>
                                    </ul>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>

                    <Card className={styles.singleCard}>
                        <Card.Body className={`d-flex align-items-center ${styles.cardBody}`}>

                            <Row className={styles.titleContainer}>
                                <Col sm="12" md="3" className="d-flex justify-content-center align-items-center">
                                    <Image src="/skills/frameworks.png" width="72" height="72" alt="Frameworks and CMSs" />
                                </Col>
                                <Col sm="12" md="9">
                                    <p className={styles.cardTitle}>
                                        Frameworks & CMSs
                                    </p>
                                    <ul className={styles.skillsList}>
                                        <li>React</li>
                                        <li>Express</li>
                                        <li>Next</li>
                                        <li>Node.js</li>
                                        <li>Wordpress</li>
                                    </ul>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>


                    <Card className={styles.singleCard}>
                        <Card.Body className={`d-flex align-items-center ${styles.cardBody}`}>

                            <Row className={styles.titleContainer}>
                                <Col sm="12" md="3" className="d-flex justify-content-center align-items-center">
                                    <Image src="/skills/databases.png" width="72" height="72" alt="Databases" />
                                </Col>
                                <Col sm="12" md="9">
                                    <p className={styles.cardTitle}>
                                        Databases
                                    </p>
                                    <ul className={styles.skillsList}>
                                        <li>MySQL / MariaDB</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>


                    <Card className={styles.singleCard}>
                        <Card.Body className={`d-flex align-items-center ${styles.cardBody}`}>

                            <Row className={styles.titleContainer}>
                                <Col sm="12" md="3" className="d-flex justify-content-center align-items-center">
                                    <Image src="/skills/design.png" width="72" height="72" alt="Design" />
                                </Col>
                                <Col sm="12" md="9">
                                    <p className={styles.cardTitle}>
                                        Tools
                                    </p>
                                    <ul className={styles.skillsList}>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe XD</li>
                                        <li>Figma</li>
                                        <li>Git</li>
                                    </ul>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>

                </motion.div>

            </Container> */}
        </div>

    )
}

export default About