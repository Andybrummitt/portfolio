import Button from "../button/Button.component";
import "./landingpage.styles.scss";

const LandingPage = () => {

  return (
    <div className="page-container">
      <div className="content-container">
        <p className="intro-name">
          👋 Hi I'm <span className="orange-bold">Andy</span>
        </p>
        <p>
          A Front-end Developer proficient in <span>React</span>,{" "}
          <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>.{" "}
        </p>
        <div className="buttons-container">
          <Button innerText="About Me" path="aboutme" btnClass="aboutme-btn" />
          <Button innerText="See My Work" path="portfolio" btnClass="portfolio-btn"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
