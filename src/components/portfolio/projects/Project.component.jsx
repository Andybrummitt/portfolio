import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import "./project.styles.scss";

const Project = ({ info, showLeft, showRight, direction }) => {
  const { image, title, about, website, github } = info;


  return (
    <div className="project-container">
    <span>
        <FontAwesomeIcon
          onClick={showLeft}
          className="arrow-left"
          icon={faCircleArrowLeft}
        />
      </span>
      <span>
        <FontAwesomeIcon
          onClick={showRight}
          className="arrow-right"
          icon={faCircleArrowRight}
        />
      </span>
      <motion.div
        key={title}
        className="inner-container"
        initial={{ x: direction === 'left' ? 300 : -300 }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: direction === 'left' ? -300 : 300, transition: { duration: 0.5} }}
      >
        <motion.h3 className="project-title">
          {title}
        </motion.h3>
        <section className="image-container">
          <img src={image} alt="project-image" />
        </section>
        <section className="about-project">
          <p>{about}</p>
          <div className="project-links-container">
            <button className="website-btn">
              <a href={website}>See Website</a>
            </button>
            <button className="github-btn">
              <a href={github}>See Github</a>
            </button>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Project;
