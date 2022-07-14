import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bootstrap from "../../images/logo-images/bootstrap.png";
import css from "../../images/logo-images/css.png";
import html from "../../images/logo-images/html.png";
import js from "../../images/logo-images/js.png";
import node from "../../images/logo-images/node.png";
import react from "../../images/logo-images/react.png";
import sass from "../../images/logo-images/sass.png";
import { sectionVariants } from "./aboutMeSectionVariants";
import Skill from "./Skill";

const SkillsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start(sectionVariants.visible);
    }
    if (!inView) {
      controls.start(sectionVariants.hidden);
    }
  }, [inView]);

  return (
    <div className="skills-ref-container" ref={ref}>
      <motion.section className="skills-section" animate={controls}>
        <h2>Skills & Technologies</h2>
        <div className="skill-list-container">
          <Skill img={html} name="HTML 5" />
          <Skill img={css} name="CSS 3" />
          <Skill img={js} name="Javascript" />
          <Skill img={react} name="React" />
          <Skill img={bootstrap} name="Bootstrap" />
          <Skill img={node} name="Node" />
          <Skill img={node} name="Express" />
          <Skill img={sass} name="SCSS" />
        </div>
      </motion.section>
    </div>
  );
};

export default SkillsSection;
