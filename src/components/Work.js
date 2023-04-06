import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Work.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

const animationOrder = {
    initialTitle: 0.05,
    titleMoveLeft: 0.10,
    titleHideStart: 0.9,
    titleHideEnd: 1,
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

    const titleOffset = isMobile ? "-5%" : "-30%";
    const xTitle = useTransform(
        scrollYProgress,
        [
            animationOrder.initialTitle,
            animationOrder.titleMoveLeft,
            animationOrder.titleHideStart,
            animationOrder.titleHideEnd
        ],
        ["0%", titleOffset, titleOffset, "-100%"]
    );

    const xImage1 = useTransform(
        scrollYProgress,
        [
            animationOrder.img1Start, 
            animationOrder.img1Center
        ],
        ["90%", "0%"]
    );

    const scaleImage1 = useTransform(scrollYProgress, [0.2, 0.3, 0.31, 0.4, 0.41], [0, 0.8, 0.4, 0.4, 0]);

    const opacityDesc1 = useTransform(scrollYProgress, [0.27, 0.31, 0.39, 0.4], [0, 1, 1, 0]);

    const xImage2 = useTransform(
        scrollYProgress,
        [
            animationOrder.img2Start, 
            animationOrder.img2Center
        ],
        ["-90%", "0%"]
    );

    const scaleImage2 = useTransform(scrollYProgress, [0.55, 0.65, 0.66, 0.7, 0.71], [0, 0.8, 0.4, 0.4, 0]);

    const opacityDesc2 = useTransform(scrollYProgress, [0.62, 0.66, 0.74, 0.75], [0, 1, 1, 0]);

    return (
        <div className={styles.height} ref={targetRef}>
            <motion.h2 className={styles.sectionTitle} style={{ position, x: xTitle, position, top: "10vh" }}>Work.</motion.h2>


            <motion.div className={`element d-flex justify-content-center ${styles.imgContainer}`} style={{ position, height: "100vh", scale: scaleImage1, x: xImage1, top: "1vh" }}>
                <Image src="/work/loca.jpg" width="1400" height="1054" style={{ borderRadius: "14px" }}></Image>
            </motion.div>
            <motion.div style={{ position, top: "20vh", opacity: opacityDesc1 }}>
                <span className={styles.projectTitle}>Loca</span>
            </motion.div>

            <motion.div style={{ position, top: "80vh", opacity: opacityDesc1 }}>
                <span className={styles.projectDesc}>UI design of app to manage drivers</span>
            </motion.div>



            <motion.div className={`element d-flex justify-content-center ${styles.imgContainer}`} style={{ position, height: "100vh", scale: scaleImage2, x: xImage2, top: "1vh" }}>
                <Image src="/work/bosch.jpg" width="1400" height="1054" style={{ borderRadius: "14px" }}></Image>
            </motion.div>
            <motion.div style={{ position, top: "20vh", opacity: opacityDesc2 }}>
                <span className={styles.projectTitle}>Loca</span>
            </motion.div>

            <motion.div style={{ position, top: "80vh", opacity: opacityDesc2 }}>
                <span className={styles.projectDesc}>UI design of app to manage drivers</span>
            </motion.div>


        </div>
    )
}

export default Work