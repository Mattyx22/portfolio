import React from 'react'
import styles from '@/styles/Contact.module.css'
import AnimatedText from './partials/AnimatedText'

const Contact = () => {
  return (
    <div className={styles.height}>
      <div className={styles.paddingTop60}>
      <AnimatedText>
                  I am excited about the new opportunities that this knowledge
                  will bring me and cant wait to see what I can create with it.
      </AnimatedText>
      </div>

      <div className={styles.contactContainer}>
        <p>Intrested to work with me?</p>
        <a href="mailto:mateusz.komar@outlook.com">Get in touch</a>
      </div>
    </div>
  )
}

export default Contact