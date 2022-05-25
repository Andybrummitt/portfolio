import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./pagetitle.styles.scss";

const titleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

const PageTitle = ({ text }) => {

    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.5,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start(titleVariants.visible);
      }
      if (!inView) {
        controls.start(titleVariants.hidden);
      }
    }, [inView]);
    
  return (
    <div className="title-container" ref={ref}>
        <motion.h1 className="title" animate={controls}>{text}</motion.h1>
    </div>
  )
}

export default PageTitle