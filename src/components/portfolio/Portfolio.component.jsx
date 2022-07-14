import { v4 as uuidv4 } from "uuid";
import PageTitle from "../pagetitle/PageTitle.component";
import "./portfolio.styles.scss";
import Project from "./projects/Project.component";
import projectObjs from "./projects/projectObjs";
import bootstrap from '../../images/logo-images/bootstrap.png'

const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <PageTitle text={"Portfolio"} />
      <div className="portfolio-content-container">
        {projectObjs.map((project) => (
          <Project key={uuidv4()} info={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
