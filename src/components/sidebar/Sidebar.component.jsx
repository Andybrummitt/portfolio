import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../../images/CV.pdf";
import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/Andybrummitt?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andy-brummitt-dev/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a target="_blank" href={cv}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
