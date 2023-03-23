import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import Slider from './Slider';

import styles from '@/styles/TopSection.module.css';

const TopSection = () => {
  return (
    <>
    <Container fluid>
        <Row className={styles.height75}>
            <Col className={styles.padding10}>
            <h1>Mateusz Komar. <span className={styles.webdev}>Webdeveloper.</span></h1>
            <h2>I develop <span className={styles.ideas}>ideas</span> for the web.</h2>
            <p>I'm a developer specializing in web technologies. Passionate about creating dynamic and responsive user interfaces that deliver an outstanding user experience.</p>
            </Col>
           <Col>
                <Slider />
           </Col>
        </Row>
    </Container>
    </>
  )
}

export default TopSection