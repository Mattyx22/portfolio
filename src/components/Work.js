import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Work.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Marquee from './partials/Marquee';
import { Row, Col } from 'react-bootstrap';

const animationOrder = {
    initialTitle: 0.1,
    titleMoveLeft: 0.2,
    img1Start: 0.15,
    img1Center: 0.3,
    img2Start: 0.5,
    img2Center: 0.65,
}

const Work = () => {
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


    const targetRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });


    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "sticky"
    });

    return (
        <div className={styles.height} ref={targetRef} id="work">
            <motion.div style={{ position, top: "35vh" }}>
                <h2 className={`${styles.sectionTitle} d-flex justify-content-center align-items-center`}>
                    My Great
                </h2>
                <Marquee>WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK</Marquee>
            </motion.div>

            <Row>
                <div style={{ position: "relative", left: "10vw", marginBottom: "20vh" }}>
                    <video src="/work/cw.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div style={{ position: "relative", left: "50vw", marginBottom: "20vh" }}>
                    <video src="/work/kaldera.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div style={{ position: "relative", left: "10vw", marginBottom: "20vh" }}>
                    <video src="/work/ra.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div style={{ position: "relative", left: "50vw", marginBottom: "20vh" }}>
                    <video src="/work/bosch.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div style={{ position: "relative", left: "10vw", marginBottom: "20vh" }}>
                    <video src="/work/loca.mp4" loop autoPlay muted className={styles.video}></video>
                </div>
            </Row>


        </div>
    )
}

export default Work