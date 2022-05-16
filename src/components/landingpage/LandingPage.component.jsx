import React, { useEffect } from "react";
import "./landingpage.styles.scss";

const LandingPage = () => {
  
  useEffect(() => {
    const introName = document.querySelector('.intro-container');
    for(let i = 0; i < introName.childNodes.length; i++){
      introName.childNodes[i].classList.add('intro-name');
      introName.childNodes[i].style.animationDelay = `${i * 0.2}s`;
      console.log(introName.childNodes[i].style.animationDelay, introName.childNodes[i].textContent)
    }
  }, []);
  
  
  return (
    <div className="page-container">
        <p className="intro-container">
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
        
      </div>
  );
};

export default LandingPage;
