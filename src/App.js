import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "./Context";

function App() {
  const theme = useContext(ThemeContext)
  const{ darkMode} = theme.state
  return (
    <div className="App"
    style={{
      background: darkMode ? 'black': '',
      color: darkMode ? 'white': '' ,
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
