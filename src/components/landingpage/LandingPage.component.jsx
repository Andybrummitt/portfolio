import Button from "../button/Button.component";
import "./landingpage.styles.scss";

const LandingPage = () => {
  return (
    <div className="page-container">
      <div id="landingpage-top"></div>
      <div className="content-container">
        <p className="intro-name">
          👋 Hi I'm <span className="color-primary">Andy</span>
        </p>
        <p>
          A Front-end Developer proficient in <span>React</span>,{" "}
          <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>.{" "}
        </p>
        <div className="buttons-container">
          <Button
            innerText="See My Work"
            path="portfolio"
            btnClass="portfolio-btn"
          />
          <Button innerText="About Me" path="aboutme" btnClass="aboutme-btn" />
        </div>
          <div className="custom-shape-divider-bottom-1657840038">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
