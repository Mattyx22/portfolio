import React from "react";
import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.textContainer}>
          <p>Let&apos;s work together.</p>
          <a href="mailto:mateusz.komar@outlook.com">Get in touch with me.</a>
        </div>
        <div className={styles.contactFooter}>
          <div className={styles.footerPosition}>
            <span>
              © 2023 Mateusz Komar
            </span>
            <a href="https://www.behance.net/mattygt" className={styles.iconLink}><FontAwesomeIcon icon={faBehance} /></a>
            <a href="https://github.com/Mattyx22" className={styles.iconLink}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/mateusz-komar/" className={styles.iconLink}><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
