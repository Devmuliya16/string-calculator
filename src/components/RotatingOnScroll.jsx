import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


function RotatingOnScroll(props) {
  // Get the scrollY progress (0 to 1) from the top of the page to the bottom
  const { scrollYProgress } = useScroll();

  // Map scrollYProgress to rotation degrees (0 to 360)
  const x = useTransform(scrollYProgress, [0, 1], ['200px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0,1], [0,90]);

  return (
    <motion.img
      src={props.img}
      style={{
        ...props.position,
        width: 300,
        height: 300,
        position: 'fixed',
        right: '0%',
        x, // Apply vertical movement based on scroll
        opacity, // Apply fade-in effect based on scroll
        rotate,
        transform: 'translateX(-50%)', // Center horizontally
        bottom: 0, // Start the image at the bottom of the viewport
      }}
    >

    </motion.img>

  );
}

export default RotatingOnScroll;
