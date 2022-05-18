import './App.css';
import Navbar from './components/navbar/Navbar.component';
import LandingPage from './components/landingpage/LandingPage.component';
import AboutMe from './components/aboutme/AboutMe.component';
import Portfolio from './components/portfolio/Portfolio.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
