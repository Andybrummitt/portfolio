import { v4 as uuidv4 } from "uuid";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectObjs from "./projects/projectObjs";

const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-content-container">
        <h1 id="portfolio-title">Projects</h1>
        <p>The projects are hosted on heroku so may take a few seconds to load.</p>
        <br/>
        <p>Click on each project to view.</p>
        {projectObjs.map((project) => (
          <Project key={uuidv4()} info={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
