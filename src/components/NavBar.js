import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "@/styles/NavBar.module.css";

import Image from "next/image";

const NavBar = ({ title }) => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }

  }, [lastScrollY]);


  return (
    <>
      <Navbar
        key="lg"
        // bg="dark"
        style={{
          transition: "1s ease",
          // backgroundColor: navBackground ? "#ffffff" : "transparent",
        }}
        variant="dark"
        expand="lg"
        className={`${show ? 'show' : 'hidden'} navbarColor`}
        fixed="top"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src="/logo.png" width="60" height="45" alt="logo" className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            className={styles.navbarToggler}
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#about" className={styles.navlinkStyling}>
                  <span>About</span>
                </Nav.Link>
                <Nav.Link href="#experience" className={styles.navlinkStyling}>
                  <span>Experience</span>
                </Nav.Link>
                <Nav.Link href="#work" className={styles.navlinkStyling}>
                  <span>Work</span>
                </Nav.Link>
                <Nav.Link href="#contact" className={styles.navlinkStyling}>
                  <span>Contact</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
