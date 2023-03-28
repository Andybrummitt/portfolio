import hero from "../../images/hero.svg";
import Button from "../button/Button.component";
import "./landingpage.styles.scss";

const LandingPage = () => {
  return (
    <div className="page-container">
      <div id="landingpage-top"></div>
      <div className="content-container">
        <div>
          <p className="intro-name">
            <span>A</span>ndy <span>B</span>rummitt
          </p>
          <p className="intro-text">Frontend Developer</p>
          <Button
            innerText="See My Work"
            path="portfolio"
            btnClass="portfolio-btn"
          />
        </div>
        <img src={hero} alt="image of man coding" />
      </div>
    </div>
  );
};

export default LandingPage;
