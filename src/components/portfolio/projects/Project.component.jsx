import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./project.styles.scss";

const Project = ({ info, showLeft, showRight }) => {

  const { image, title, about, website, github } = info;

  return (
    <div className="project-container">
      <h3 className="project-title">{title}</h3>
      <section className="image-container">
        <span>
          <FontAwesomeIcon onClick={showLeft} className="arrow-left" icon={faCircleArrowLeft} />
        </span>
        <img src={image} alt="project-image" />
        <span>
          <FontAwesomeIcon onClick={showRight} className="arrow-right" icon={faCircleArrowRight} />
        </span>
      </section>
      <section className="about-project">
        <p>
          {about}
        </p>
        <div className="project-links-container">
          <p className="website"><button className="website-btn"><a href={website}>See Website</a></button></p>
          <p className="github"><button className="github-btn"><a href={github}>See Github</a></button></p>
        </div>
      </section>
    </div>
  );
};

export default Project;
