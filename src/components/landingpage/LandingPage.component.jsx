import React, { useEffect } from "react";
import "./landingpage.styles.scss";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {

  const introAnimation = () => {
    const introName = document.querySelector('.intro-name');
    for(let i = 0; i < introName.childNodes.length; i++){
      introName.childNodes[i].classList.add('intro-name-span');
      introName.childNodes[i].style.animationDelay = `${i * 0.2}s`;
    }
    introName.onanimationend = () => {
      const introTitle = document.querySelector('.cta-button');
      introTitle.classList.add('cta-button-animation');
    }
  }
  
  useEffect(() => {
    introAnimation();

  }, []);
  
  
  return (
    <div className="page-container">
    <div className="upper-container">
      <span>Self-taught</span>
    </div>
      <div className="intro-container">
        <p className="intro-name">
          <span>H</span>
          <span>i</span>
          <span> </span>
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <span> </span>
          <span className="orange-bold">A</span>
          <span className="orange-bold">n</span>
          <span className="orange-bold">d</span>
          <span className="orange-bold">y</span>
        </p>
        <button className="cta-button"><span>About Me</span><a href="#"><FontAwesomeIcon icon={faArrowRight} /></a></button>
        </div>
        <div className="lower-container">
          <span>Web Developer</span>
        </div>
      </div>
  );
};

export default LandingPage;
