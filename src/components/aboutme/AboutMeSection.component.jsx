import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutMeSection = () => {
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
        duration: 1,
      },
    },
  };

  return (
    <div className="animation-ref-container" ref={ref}>
      <motion.section className="intro-section" animate={controls}>
        <p>
          I'm an Essex-based developer who has been coding for the past two
          years.
          <br />
          <br />
          I love building websites and am currently looking for work in the
          software development industry.
          <br />
          <br />
          See my{" "}
          <a target="_blank" href="https://uk.linkedin.com/in/andy-brummitt-b4604847">
            {" "}
            LinkedIn
          </a>{" "}
          for more details.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutMeSection;
