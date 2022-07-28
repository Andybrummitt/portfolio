import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.styles.scss";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="home-link">
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
      </div>

      <ul className="info-links">
        <li>
          <ScrollLink
            to={"portfolio"}
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>Projects</span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to={"aboutme"}
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>About Me</span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to={"contact"}
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>Contact</span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
