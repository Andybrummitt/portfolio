import React, { useEffect, useState } from "react";
import Canvas from "../canvas/Canvas.component";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectsObj from "./projects/projectsObj";
import { v4 as uuidv4 } from 'uuid';

const Portfolio = () => {

  const [ projectKey, setProjectKey ] = useState(1);

  const showLeft = () => {
    setProjectKey(prevKey => prevKey-1);
  }

  const showRight = () => {
    setProjectKey(prevKey => prevKey+1);
  }

  return (
    <div className="portfolio-container">
      <div className="title-container">
        <h1>Portfolio</h1>
      </div>
      <div className="projects-carousel-container">
        { projectsObj.filter(project => project.key === projectKey)
        .map(project => <Project key={uuidv4} info={project} showLeft={showLeft} showRight={showRight} />) }
        
      </div>
      
    </div>
  );
};

export default Portfolio;
