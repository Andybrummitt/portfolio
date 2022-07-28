import Button from "../button/Button.component";
import "./landingpage.styles.scss";

const LandingPage = () => {
  return (
    <div className="page-container">
      <div id="landingpage-top"></div>
      <div className="content-container">
        <p className="intro-name">Andy Brummitt</p>
        <p className="intro-text">
          A Front-end Developer proficient in <span>React</span>,{" "}
          <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>.{" "}
        </p>
        <Button
          innerText="See My Work"
          path="portfolio"
          btnClass="portfolio-btn"
        />
      </div>
    </div>
  );
};

export default LandingPage;
