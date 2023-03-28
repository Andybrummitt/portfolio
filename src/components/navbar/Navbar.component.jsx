import logo from "../../images/logo.png";
import "./navbar.styles.scss";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="logo">
          <ScrollLink
            to={"landingpage-top"}
            offset={-72}
            className="logo"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={logo} />
          </ScrollLink>
        </div>

        <ul className="info-links">
          <li>
            <ScrollLink
              to={"landingpage-top"}
              offset={-72}
              spy={true}
              smooth={true}
              duration={500}
            >
              <span>Home</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to={"aboutme"}
              offset={-72}
              spy={true}
              smooth={true}
              duration={500}
            >
              <span>About Me</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to={"portfolio"}
              offset={-72}
              spy={true}
              smooth={true}
              duration={500}
            >
              <span>Projects</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to={"contact"}
              offset={-72}
              spy={true}
              smooth={true}
              duration={500}
            >
              <span>Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
