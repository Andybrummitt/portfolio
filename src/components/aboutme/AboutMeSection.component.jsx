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
          <h2>Introduction</h2>
          <h4 className="orange-bold">Who am I?</h4>
          <p>
            I'm a web developer specialising in the MERN Stack who has a passion for creating clean looking websites and functional web apps to provide a seamless experience for the end user.
          </p>
          
          <br />
          <br />
          <h4 className="orange-bold">My Goals</h4>
          <p>
            My short term goals are to learn NextJS and GraphQL and develop a social media application with the technologies.
          <br/>
          <br/>
            In the future I hope to expand my skillset to mobile development and build applications with React Native.
          </p>
          <br />
          <br />
      </motion.section>
    </div>
  );
};

export default AboutMeSection;
