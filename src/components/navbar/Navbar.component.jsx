import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.styles.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="home-link">
        <Link to="/" className="home-link">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <ul className="info-links">
        <li id="contact-link">
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/andy-brummitt-dev/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Andybrummitt?tab=repositories">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
