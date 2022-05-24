import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./project.styles.scss";

const Project = ({ image, about, showLeft, showRight }) => {
  return (
    <div className="project-container">
      <h3 className="project-title">Project title</h3>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          voluptatem ducimus repellat distinctio? Earum iste quasi laborum est
          nemo vero labore asperiores, eos expedita obcaecati temporibus quo
          perspiciatis facilis magni!
        </p>
      </section>
    </div>
  );
};

export default Project;
