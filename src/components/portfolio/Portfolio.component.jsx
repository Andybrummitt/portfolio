import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectsObj from "./projects/projectsObj";

const Portfolio = () => {
  const [projectKey, setProjectKey] = useState(1);

  const showLeft = () => {
    setProjectKey((prevKey) => {
      if (prevKey === 1) {
        return 5;
      } else return prevKey - 1;
    });
  };

  const showRight = () => {
    setProjectKey((prevKey) => {
      console.log(prevKey);
      if (prevKey === 5) {
        return 1;
      } else return prevKey + 1;
    });
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="title-container">
        <h1>Portfolio</h1>
      </div>
      <div className="projects-carousel-container">
        {projectsObj
          .filter((project) => project.key === projectKey)
          .map((project) => (
            <Project
              key={uuidv4}
              info={project}
              showLeft={showLeft}
              showRight={showRight}
            />
          ))}
      </div>
      <Link to="/contact">
        <button>
          Contact
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
