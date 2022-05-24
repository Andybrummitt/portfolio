import React, { useEffect } from "react";
import Canvas from "../canvas/Canvas.component";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";

import mixin from '../../images/project-images/mixin.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="title-container">
        <h1>Portfolio</h1>
      </div>
      <div className="projects-carousel-container">
        <Project image={mixin} about={'mixin app'} />
      </div>
      
    </div>
  );
};

export default Portfolio;
