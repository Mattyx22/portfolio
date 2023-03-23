import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '@/styles/NavBar.module.css';

const NavBar = ({title}) => {
  return (
    <>
    
        <Navbar key="lg" bg="dark" variant="dark" expand="lg" className={`mb-3 ${styles.navbarColor}`} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={styles.navPadding}>About</Nav.Link>
                  <Nav.Link href="#action2" className={styles.navPadding}>Experience</Nav.Link>
                  <Nav.Link href="#action3" className={styles.navPadding}>Work</Nav.Link>
                  <Nav.Link href="#action4" className={styles.navPadding}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      </>
  )
}

export default NavBar