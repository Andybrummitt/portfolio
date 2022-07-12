import PageTitle from "../pagetitle/PageTitle.component";
import "./aboutme.styles.scss";
import AboutMeSection from "./AboutMeSection.component";
import PortfolioLinkButton from "./PortfolioLinkButton.component";
import SkillsSection from "./SkillsSection.component";

const AboutMe = () => {
  return (
    <div className="about-me-container" id="aboutme">
      <PageTitle text={"About me"} />
      <div className="sections-container">
        <AboutMeSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default AboutMe;
