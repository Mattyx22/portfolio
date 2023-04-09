import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Work.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

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

    const titleOffset = isMobile ? "-5%" : "-30%";

    const xTitle = useTransform(
        scrollYProgress,
        [
            animationOrder.initialTitle,
            animationOrder.titleMoveLeft,
        ],
        ["0%", titleOffset]
    );


    const xImage1 = useTransform(scrollYProgress, [0.2, 0.25], ["-30%", "0%"]);
    const opacityImage1 = useTransform(scrollYProgress, [0.2, 0.25, 0.3, 0.5], [0, 1, 1, 0]);

    
    const opacityImage2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.6], [0, 1, 1, 0]);

   
    const opacityImage3 = useTransform(scrollYProgress, [0.4, 0.45, 0.50, 0.7], [0, 1, 1, 0]);

   
    const opacityImage4 = useTransform(scrollYProgress, [0.5, 0.55, 0.6, 0.7], [0, 1, 1, 0]);

    const xImage5 = useTransform(scrollYProgress, [0.85, 0.95], ["0%", "30%"]);
    const opacityImage5 = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.9], [0, 1, 1, 0]);

    return (
        <div className={styles.height} ref={targetRef}>
            <motion.h2 className={styles.sectionTitle} style={{ position, x: xTitle, position, top: "10vh" }}>Work.</motion.h2>


            <motion.div className="d-flex justify-content-center" style={{position, x: xImage1, top: "15%", opacity: opacityImage1}}>
                <Image src="/work/loca.png" width="1100" height="825"></Image>
            </motion.div>

            <motion.div className="d-flex justify-content-center" style={{position, top: "15%", opacity: opacityImage2}}>
                <Image src="/work/ra.png" width="1100" height="825"></Image>
            </motion.div>

            <motion.div className="d-flex justify-content-center" style={{position, top: "15%", opacity: opacityImage3}}>
                <Image src="/work/cw.png" width="1100" height="825"></Image>
            </motion.div>

            <motion.div className="d-flex justify-content-center" style={{position, top: "15%", opacity: opacityImage4}}>
                <Image src="/work/kaldera.png" width="1100" height="825"></Image>
            </motion.div>

            <motion.div className="d-flex justify-content-center" style={{position, top: "15%", x: xImage5, opacity: opacityImage5}}>
                <Image src="/work/bosch.png" width="1100" height="825"></Image>
            </motion.div>
        </div>
    )
}

export default Work