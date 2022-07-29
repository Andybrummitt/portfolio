import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact.component";
import Home from "./components/home/Home.component";
import MobileNav from "./components/mobileNav/MobileNav.component";
import Navbar from "./components/navbar/Navbar.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
