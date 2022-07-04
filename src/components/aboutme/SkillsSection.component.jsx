import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bootstrap from "../../images/logo-images/bootstrap.png";
import css from "../../images/logo-images/css.png";
import firebase from "../../images/logo-images/firebase.png";
import html from "../../images/logo-images/html.png";
import js from "../../images/logo-images/js.png";
import node from "../../images/logo-images/node.png";
import react from "../../images/logo-images/react.png";
import sass from "../../images/logo-images/sass.png";
import webpack from "../../images/logo-images/webpack.png";

const SkillsSection = () => {
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
    <div className="skills-ref-container" ref={ref}>
      <motion.div animate={controls} className="skills-container">
        <h2>Skills & Technologies</h2>
        <div className="images-container">
          <img src={html} alt="HTML 5" />
          <img src={css} alt="CSS 3" />
          <img src={js} alt="Javascript" />
          <img src={react} alt="React" />
          <img src={bootstrap} alt="Bootstrap 5" />
          <img src={node} alt="Node Express" />
          <img src={sass} alt="SCSS" />
          <img src={firebase} alt="Firebase" />
          <img src={webpack} alt="Webpack" />
        </div>
        <div className="skill-list-container">
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Node+Express</span>
          <span>SCSS</span>
          <span>Firebase</span>
          <span>Webpack</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
