import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styles from '@/styles/partials/ExperienceList.module.css';
import axios from 'axios';

const ExperienceList = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        axios.get('/api/experience').then((result) => {
            setExperience(result.data.experienceList);
        })
    }, [])

    return (
        <div className={styles.center}>
            <Accordion className={`${styles.listWidth} ${styles.accordionBgColor}`} defaultActiveKey="0">
                {experience.map((item, index) => {
                    return (
                        <>
                            <Accordion.Item eventKey={index} key={`c-${index}`}>
                                <Accordion.Header style={styles.accordionHeader}>
                                <span className={styles.company}>{item.company}</span>
                                    <span className={styles.title}>- {item.title}</span>
                                    <span className={styles.dates}>{item.dates}</span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {experience[index].description.map((desc, index) => {
                                        return <p key={`e-${index}`}>- {desc}</p>
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        </>


                    );
                })}
            </Accordion>
        </div >
    )
}

export default ExperienceList