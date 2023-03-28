import AboutMe from "../aboutme/AboutMe.component";
import Contact from "../contact/Contact.component";
import LandingPage from "../landingpage/LandingPage.component";
import Portfolio from "../portfolio/Portfolio.component";
import Sidebar from "../sidebar/Sidebar.component";

const Home = () => {
  return (
    <>
      <Sidebar />
      <LandingPage />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
