import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';

import styles from '@/styles/Slider.module.css';

const Slider = () => {
  return (
    <>
    <Carousel controls={false} variant="dark">
      <Carousel.Item className={styles.height100}>
      <Image
      src="/test.jpg"
      alt='Mountains'
   fill
   
    />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider