import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.styles.scss";

import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import cv from '../../images/CV.pdf'

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="main-nav">
      <div className="home-link">
        {location.pathname === "/" ? (
          <ScrollLink
            to={"landingpage-top"}
            offset={-100}
            className="home-link"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon={faHouse} />
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="home-link">
            <FontAwesomeIcon icon={faHouse} />
          </RouterLink>
        )}
      </div>

      <ul className="info-links">
        <li>
          <RouterLink to="/contact" id="contact-link">
            Contact
          </RouterLink>
        </li>
        <li>
          <a target="_blank" href={cv}>
            CV
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andy-brummitt-dev/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/Andybrummitt?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
