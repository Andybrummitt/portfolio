import bootstrap from "../../images/logo-images/bootstrap.png";
import css from "../../images/logo-images/css.png";
import express from "../../images/logo-images/express.png";
import html from "../../images/logo-images/html.png";
import js from "../../images/logo-images/js.png";
import node from "../../images/logo-images/node.png";
import react from "../../images/logo-images/react.png";
import sass from "../../images/logo-images/sass.png";
import nextjs from "../../images/logo-images/nextjs.png";
import Skill from "./Skill";

const SkillsSection = () => {
  return (
    <div className="skills-ref-container">
      <section className="skills-section">
        <h2 className="color-secondary">Skills & Technologies</h2>
        <div className="skill-list-container">
          <Skill img={html} name="HTML 5" />
          <Skill img={css} name="CSS 3" />
          <Skill img={js} name="Javascript" />
          <Skill img={react} name="React" />
          <Skill img={bootstrap} name="Bootstrap" />
          <Skill img={node} name="Node" />
          <Skill img={express} name="Express" />
          <Skill img={sass} name="SCSS" />
          <Skill img={nextjs} name="NextJS" />
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
