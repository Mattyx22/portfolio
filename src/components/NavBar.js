import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "@/styles/NavBar.module.css";

import Image from "next/image";

const NavBar = ({ title }) => {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        className={`${navBackground ? 'navbarColor' : 'navbarTransparent'}`}
        fixed="top"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src="/logo.png" width="60" height="45" alt="logo" />
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
