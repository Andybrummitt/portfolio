import css from "../../images/logo-images/css.png";
import express from "../../images/logo-images/express.png";
import figma from "../../images/logo-images/figma.png";
import git from "../../images/logo-images/git.png";
import html from "../../images/logo-images/html.png";
import js from "../../images/logo-images/js.png";
import nextjs from "../../images/logo-images/nextjs.png";
import node from "../../images/logo-images/node.png";
import photoshop from "../../images/logo-images/photoshop.svg";
import react from "../../images/logo-images/react.png";
import sass from "../../images/logo-images/sass.png";
import typescript from "../../images/logo-images/typescript.png";
import Skill from "./Skill";

const skillArray = [
  "Javascript",
  "Typescript",
  "React",
  "NextJS",
  "HTML 5",
  "CSS 3",
  "Sass",
  "Node",
  "Express",
  "Figma",
  "Photoshop",
  "Git",
];

const SkillsSection = () => {
  return (
    <section className="skills-ref-container">
      <h3>Skills & Technologies</h3>
      <div className="skills-container">
          <ul>
            <Skill image={js} alt="Javascript" />
            <Skill image={typescript} alt="Typescript" />
            <Skill image={react} alt="React" />
            <Skill image={nextjs} alt="NextJS" />
            <Skill image={html} alt="HTML 5" />
            <Skill image={css} alt="CSS 3" />
            <Skill image={sass} alt="Sass" />
            <Skill image={node} alt="Node" />
            <Skill image={express} alt="Express" />
            <Skill image={figma} alt="Figma" />
            <Skill image={photoshop} alt="Photoshop" />
            <Skill image={git} alt="Git" />
          </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
