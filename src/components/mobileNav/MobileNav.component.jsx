import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import cv from "../../images/CV.pdf";
import "./mobileNav.styles.scss";
import logo from "../../images/logo.png";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="mobile-nav">
      <div className="home-link">
        <ScrollLink
          to={"landingpage-top"}
          offset={-100}
          className="home-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="logo" />
        </ScrollLink>
      </div>
      <FontAwesomeIcon
        className="hb"
        icon={faBars}
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <div className="mobile-info-links">
          <FontAwesomeIcon
            className="hb-close"
            icon={faXmark}
            onClick={() => setShowMenu(false)}
          />

          <ul>
            <li>
              <ScrollLink
                onClick={() => setShowMenu(false)}
                to={"landingpage-top"}
                offset={-100}
                className="home-link"
                spy={true}
                smooth={true}
                duration={500}
              >
              <span>Home</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setShowMenu(false)}
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
                onClick={() => setShowMenu(false)}
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
                onClick={() => setShowMenu(false)}
                to={"contact"}
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>Contact</span>
              </ScrollLink>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a
                onClick={() => setShowMenu(false)}
                target="_blank"
                href="https://github.com/Andybrummitt?tab=repositories"
              >
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowMenu(false)}
                target="_blank"
                href="https://www.linkedin.com/in/andy-brummitt-dev/"
              >
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a onClick={() => setShowMenu(false)} target="_blank" href={cv}>
                <span>CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
