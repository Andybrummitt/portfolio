import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "../button/Button.component";

const PortfolioLinkButton = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start(sectionVariants.visible);
    }
    if (!inView) {
      controls.start(sectionVariants.hidden);
    }
  }, [inView]);

  const sectionVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  return (
    <div className="animation-ref-container" ref={ref}>
      <motion.div className="button-container" animate={controls}>
        <Button
          innerText="See My Work"
          path="portfolio"
          btnClass="portfolio-btn"
        />
      </motion.div>
    </div>
  );
};

export default PortfolioLinkButton;
