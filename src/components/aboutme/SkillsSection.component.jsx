import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import css from "../../images/logo-images/css.png";
import bootstrap from "../../images/logo-images/bootstrap.png";
import html from "../../images/logo-images/html.png";
import js from "../../images/logo-images/js.png";
import node from "../../images/logo-images/node.png";
import react from "../../images/logo-images/react.png";
import sass from "../../images/logo-images/sass.png";
import webpack from "../../images/logo-images/webpack.png";
import firebase from "../../images/logo-images/firebase.png";
import SkillDisplay from "./SkillDisplay.component";

// const controls = useAnimation();
// const { ref, inView } = useInView({
//   threshold: 0.5,
// });

// useEffect(() => {
//   if (inView) {
//     controls.start(sectionVariants.visible);
//   }
//   if (!inView) {
//     controls.start(sectionVariants.hidden);
//   }
// }, [inView]);

// const sectionVariants = {
//   hidden: { y: "100vh", opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

//  make all imgs into array when all load we load

const SkillsSection = () => {


  return (
    <div className="skills-container">
      <SkillDisplay image={html} name="HTML 5" />
      <SkillDisplay image={css} name="CSS 3" />
      <SkillDisplay image={js} name="Javascript" />
      <SkillDisplay image={react} name="React" />
      <SkillDisplay image={bootstrap} name="Bootstrap 5" />
      <SkillDisplay image={node} name="Node Express" />
      <SkillDisplay image={sass} name="SCSS" />
      <SkillDisplay image={firebase} name="Firebase" />
      <SkillDisplay image={webpack} name="Webpack" />
    </div>
  )
      
};

export default SkillsSection;
