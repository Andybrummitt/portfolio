import './App.css';
import Navbar from './components/navbar/Navbar.component';
import LandingPage from './components/landingpage/LandingPage.component';
import AboutMe from './components/aboutme/AboutMe.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
