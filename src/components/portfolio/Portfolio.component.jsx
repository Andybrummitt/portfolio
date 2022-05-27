import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PageTitle from "../pagetitle/PageTitle.component";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectsObj from "./projects/projectsObj";

const Portfolio = () => {
  const [projectKey, setProjectKey] = useState(1);
  const [ direction, setDirection ] = useState(null);

  const showLeft = () => {
    setDirection('left');
    setProjectKey((prevKey) => {
      if (prevKey === 1) {
        return 5;
      } else return prevKey - 1;
    });
  };

  const showRight = () => {
    setDirection('right')
    setProjectKey((prevKey) => {
      if (prevKey === 5) {
        return 1;
      } else return prevKey + 1;
    });
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <PageTitle text={"Portfolio"} />
      <div className="projects-carousel-container">
        <AnimatePresence
          exitBeforeEnter
          initial={false}
        >
          {projectsObj
            .filter((project) => project.key === projectKey)
            .map((project) => (
              <Project
                key={uuidv4()}
                info={project}
                showLeft={showLeft}
                showRight={showRight}
                direction={direction}
              />
            ))}
        </AnimatePresence>
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
