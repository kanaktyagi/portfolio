import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'
function Services() {
  return (
  <div className="services">
    <div className="awesome">  
        <span>My Awesome</span>
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
       <div style={{left: "14rem"}}>
        <Card 
        emoji={HeartEmoji}
        heading={"Responsive Site"}
        details= {"Made the site responsive for mobile, laptop and tablets"}
        />
       </div>
       <div style={{top: "12rem",left: "-4rem"}}>
       <Card
       emoji={Glasses}
       heading={"Frontend Developer"}
       details={"Front-end developer expertize in making production ready websites"}
       />
       </div>
       <div style={{top: "19rem", left: "12rem"}}>
       <Card
       emoji={Humble}
       heading={"Technologies"}
       details={"Expertize in Reactjs, Nextjs, Html, css, github"}
       />
       </div>
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