import "./aboutme.styles.scss";
import AboutMeSection from "./AboutMeSection.component";
import SkillsSection from "./SkillsSection.component";

const AboutMe = () => {
  return (
    <div className="about-me-container" id="aboutme">
      <div className="about-me-inner-container">
        <div className="title-container">
          <h1 className="page-title">About me</h1>
        </div>
        <div className="sections-container">
          <AboutMeSection />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
