import React, { useEffect } from "react";
import PortfolioLinkButton from "../aboutme/PortfolioLinkButton.component";
import Button from "../button/Button.component";
import "./landingpage.styles.scss";

const LandingPage = () => {

  //  shake words to prompt hover
  //  on hover stop shake and show html logo and scale up from nothing


  return (
    <div className="page-container">
      {/* <div className="upper-container">
        <span>Front-end</span>
      </div> */}
      <div className="content-container">
          <p className="intro-name">👋 Hi I'm <span className="orange-bold">Andy</span></p>
          <p>A Front-end Developer proficient in <span>React</span>, <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>. </p>
          <div className="buttons-container">
            <Button innerText="About Me" path="aboutme" btnClass="aboutme-btn" />
            <PortfolioLinkButton />
          </div>
      </div>
      {/* <div className="lower-container">
        <span>Developer</span>
      </div> */}
    </div>
  );
};

export default LandingPage;
