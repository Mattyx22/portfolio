import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Work.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

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
    const xTitle = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 1], ["0%", titleOffset, titleOffset, "-100%"]);

    const xImage1 = useTransform(scrollYProgress, [0.3, 0.5], ["90%", "0%"]);

    const scaleImage1 = useTransform(scrollYProgress, [0.3, 0.4, 0.45, 0.5, 0.6, 0.8], [0, 0.9, 0.8, 0.7, 0.7, 0]);

    const opacityDesc1 = useTransform(scrollYProgress, [0.45, 0.70, 0.75, 0.8], [0, 1, 1, 0]);

    return (
        <div className={styles.height} ref={targetRef}>
            <motion.h2 className={styles.sectionTitle} style={{ position, x: xTitle, position, top: "10vh" }}>Work.</motion.h2>

            <motion.div className="element d-flex justify-content-center" style={{position, xImage1, height: "100vh", scale: scaleImage1, x: xImage1, top: "1vh"}}>
                <Image src="/work/loca.jpg" width="1400" height="1054"></Image>
               
            </motion.div>
            <motion.div className="desc" style={{position, top: "20vh", opacity: opacityDesc1}}>
                    <span className={styles.projectTitle}>Loca</span>
                    <span className="projectDesc">UI design of app to manage drivers</span>
                </motion.div>
        </div>
    )
}

export default Work