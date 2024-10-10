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
                    <div className={styles.videoContainer}>
                        <video src="/work/targmed-refundacja.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>Targmed-refundacja.pl</div>
                            <div className={styles.secondLine}>
                                <p>Creating an online store that fulfills orders with NFZ (Polish National Health Fund) subsidies.</p>
                                <p>A user with a reimbursement order from a doctor, provides the PESEL number and order pin. The store connects to the NHF API to verify the order and determine the health fund's surcharge.</p>
                                <p>Once verified correctly, the user receives lower prices at which to place the order.</p>
                                <hr className="hr" />
                                <table className={styles.stack}>
                                    <tr>
                                        <th>E-Commerce:</th>
                                        <th>API:</th>
                                    </tr>
                                    <tr>
                                        <td>- Wordpress / Woocommerce</td>
                                        <td>- Python</td>
                                    </tr>
                                    <tr>
                                        <td>- PHP</td>
                                        <td>- Node.js</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.workContainerLeft}>
                    <div className={styles.videoContainer}>
                        <video src="/work/cw.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>CreatorsWorld</div>
                            <div className={styles.secondLine}>
                                <p>A self-developed marketplace system to handle sales and purchases of user-created digital products.</p>
                                <hr className="hr" />
                                <table className={styles.stack}>
                                    <tr>
                                        <td>- React</td>
                                    </tr>
                                    <tr>
                                        <td>- Node.js</td>
                                    </tr>
                                    <tr>
                                        <td>- MongoDB</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.workContainerRight}>
                    <div className={styles.videoContainer}>
                        <video src="/work/kaldera.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>Kaldera.com.pl</div>
                            <div className={styles.secondLine}>
                                <p>The site of a company that sells heating equipment and home plumbing.</p>
                                <hr className="hr" />
                                <p>- Wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.workContainerLeft}>
                    <div className={styles.videoContainer}>
                        <video src="/work/ra.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>Rearaxle.co.uk</div>
                            <div className={styles.secondLine}>
                                <p>Web store for a car parts selling company.</p>
                                <hr className="hr" />
                                <p>- Wordpress / Woocommerce</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.workContainerRight}>
                    <div className={styles.videoContainer}>
                        <video src="/work/bosch.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>Bosch.swidnica.pl</div>
                            <div className={styles.secondLine}>
                                <p>Website for a car service.</p>
                                <hr className="hr" />
                                <p>- Wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.workContainerLeft}>
                    <div className={styles.videoContainer}>
                        <video src="/work/loca.mp4" loop autoPlay muted className={styles.video}></video>
                        <div className={styles.overlay}>
                            <div className={styles.firstLine}>Loca</div>
                            <div className={styles.secondLine}>
                                <p>UI / UX design for a website and mobile app that helps owners of businesses to track their drivers.</p>
                                <hr className="hr" />
                                <p>- Figma</p>
                                <p>- Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>


        </div>
    )
}

export default Work