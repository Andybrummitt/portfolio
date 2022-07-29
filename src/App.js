import "./App.css";
import BottomNavbar from "./components/bottomNavbar/BottomNavbar.component";
import Home from "./components/home/Home.component";
import MobileNav from "./components/mobileNav/MobileNav.component";
import Navbar from "./components/navbar/Navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      <Home />
      <BottomNavbar />
    </div>
  );
}

export default App;
