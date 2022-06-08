import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./navbar.styles.scss";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
        <div className="home-link">
            <Link to="/" className="home-link">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
        </div>
        <ul className="info-links">
            <li><a href="https://www.linkedin.com/in/andy-brummitt-dev/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://github.com/Andybrummitt?tab=repositories">
            <FontAwesomeIcon icon={faGithub} />
            </a></li>
        </ul>
    </nav>
  )
}

export default Navbar