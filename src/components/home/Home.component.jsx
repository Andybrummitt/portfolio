import AboutMe from "../aboutme/AboutMe.component";
import LandingPage from "../landingpage/LandingPage.component";
import Portfolio from "../portfolio/Portfolio.component";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Portfolio />
      <AboutMe />
    </>
  );
};

export default Home;
