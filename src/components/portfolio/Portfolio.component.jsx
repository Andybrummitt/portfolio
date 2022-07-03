import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PageTitle from "../pagetitle/PageTitle.component";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectObjs from "./projects/projectObjs";

const Portfolio = () => {

  return (
    <div className="portfolio-container" id="portfolio">
      <PageTitle text={"Portfolio"} />
      <div className="portfolio-content-container">
        {projectObjs.map(project => <Project key={uuidv4()} info={project} /> )}
      </div>
    </div>
  );
};

export default Portfolio;
