import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import "./button.styles.scss";

const Button = ({ innerText, path, btnClass }) => {
  return (
    <button className={`link-button ${btnClass ? btnClass : ''}`}>
      <Link to={path} spy={true} smooth={true} offset={0} duration={500}>
        <span>{innerText}</span>
      </Link>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default Button;
