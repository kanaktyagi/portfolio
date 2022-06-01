import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { ThemeContext } from '../../Context'
import {motion} from 'framer-motion'
function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div className="services">
    <div className="awesome">  
        <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
        <span>services</span>
        <span>Currently working for Melorra as a frontend developer
        <br/>
        Migrated the existing code to Nextjs with Reactjs for better seo and
        fast page load.
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
     </div>
    <div className="cards">
       <motion.div
       initial={{ left: "25rem" }}
       whileInView={{ left: "14rem" }}
       transition={transition}
        style={{left: "14rem"}}>
        <Card 
        emoji={HeartEmoji}
        heading={"Responsive Site"}
        details= {"Made the site responsive for mobile, laptop and tablets"}
        />
       </motion.div>
       <motion.div
       initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
       style={{top: "12rem",left: "-4rem"}}>
       <Card
       emoji={Glasses}
       heading={"Frontend Developer"}
       details={"Front-end developer expertize in making production ready websites"}
       />
       </motion.div>
       <motion.div 
       initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
       style={{top: "19rem", left: "12rem"}}>
       <Card
       emoji={Humble}
       heading={"Technologies"}
       details={"Expertize in Reactjs, Nextjs, Html, css, github"}
       />
       </motion.div>
       <div className='blur s-blur1' style={{background: "var(--purple)"}}>

       </div>
       <div className='blur s-blur2' style={{background: "#C1F5FF"}}>
       
       </div>
       <div>
       </div>
    </div>
  </div>
  )
}

export default Services