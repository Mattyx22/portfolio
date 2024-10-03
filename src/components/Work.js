import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Work.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import Marquee from './partials/Marquee';
import { Row } from 'react-bootstrap';

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
                <div className={styles.workContainerRight}>
                    <video src="/work/targmed-refundacja.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div className={styles.workContainerLeft}>
                    <video src="/work/cw.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div className={styles.workContainerRight}>
                    <video src="/work/kaldera.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div className={styles.workContainerLeft}>
                    <video src="/work/ra.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div className={styles.workContainerRight}>
                    <video src="/work/bosch.mp4" loop autoPlay muted className={styles.video}></video>
                </div>

                <div className={styles.workContainerLeft}>
                    <video src="/work/loca.mp4" loop autoPlay muted className={styles.video}></video>
                </div>
            </Row>


        </div>
    )
}

export default Work