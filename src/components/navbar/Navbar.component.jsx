import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav className="main-nav">
        <div className="home-link">
            <a href="#" className="home-link">
                <FontAwesomeIcon icon={faHouse} />
            </a>
        </div>
        <ul className="info-links">
            <li><a href="">
            <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="">
            <FontAwesomeIcon icon={faGithub} />
            </a></li>
        </ul>
    </nav>
  )
}

export default Navbar