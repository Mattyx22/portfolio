import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '@/styles/NavBar.module.css';

import Image from 'next/image';

const NavBar = ({title}) => {
  return (
    <>
    
        <Navbar key="lg" bg="dark" variant="dark" expand="lg" className={`${styles.navbarColor}`} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src="/logo.png" width="60" height="45" />  
            </Navbar.Brand>
            <Navbar.Toggle className={styles.navbarToggler} aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about" className={styles.navlinkStyling}>About</Nav.Link>
                  <Nav.Link href="#experience" className={styles.navlinkStyling}>Experience</Nav.Link>
                  <Nav.Link href="#work" className={styles.navlinkStyling}>Work</Nav.Link>
                  <Nav.Link href="#contact" className={styles.navlinkStyling}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      </>
  )
}

export default NavBar