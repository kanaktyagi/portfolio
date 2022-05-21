import React from 'react'
import './Intro.css'
import GithubIcon from '../../img/github.png'
import LinkedInIcon from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import myProfile from "../../img/profile_kanak.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";


function Intro() {
  return (
   <div className="intro">
    <div className="i-left">
      <div className="i-name">
      <span>Hy! I Am</span>
      <span>Kanak Tyagi</span>
      <span>Frontend Developer skilled in Reactjs
       and Nextjs with experience
        in web development</span>
      </div>
      <button className="button i-button">
      Hire Me
      </button>
      <div className="i-icons">
      <a href='https://github.com/kanaktyagi?tab=repositories' target="_blank">
      <img src={GithubIcon} alt="github-icon"/>
      </a>
      <a href='https://www.linkedin.com/in/kanak-tyagi-6949478b/' target="_blank">
      <img src={LinkedInIcon} alt="linked-in-icon"/>
      </a>
      <a href='https://www.instagram.com/tyagi.knk/' target="_blank" >
      <img src={Instagram} alt="instagram"/>
      </a>
      </div>
     
    </div>
    <div className="i-right">
    <img src={Vector1} alt="vector-1"/>
    <img src={Vector2} alt="vertor-2"/>
    <img src={myProfile} alt="my-photo" className='i-my_profile'/>
    <div>
    <FloatingDiv/>
    </div>
    </div>
   </div>
  )
}

export default Intro