import React, { useContext } from 'react'
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
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { ThemeContext } from '../../Context'
import {motion} from 'framer-motion'


function Intro() {
  const transition= {duration : 2, type: 'spring'};
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="intro">
    <div className="i-left">
      <div className="i-name">
      <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
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
    <motion.img 
    initial={{left: '-36%'}}
    whileInView={{left: '-24%'}}
    transition={transition} 
    src={glassesimoji} alt=""/>
    <motion.div
    initial={{top: '-4%', left: '74%'}}
    whileInView={{left: '68%'}}
    transition={transition}
     style={{top: '-4%', left: '68%'}}>
    <FloatingDiv image={crown} txt1='Web' txt2="Developer"/>
    </motion.div>
    <motion.div 
    initial={{top: '80%',left: "10rem"}}
    whileInView={{top : '80%', left: '0rem'}}
    transition={transition}
    style={{top: "80%"}}>
    <FloatingDiv image={thumbup} txt1='Using Reactjs' txt2="& Nextjs"/>
    </motion.div>
    <div className='blur' style={{background: "rgb(238 210 255)"}}>
    </div>
    <div className='blur' style={{background: "#C1F5FF",top:"17rem",width:'21rem',height: "11rem",left:"-9rem"}}>
    </div>
    </div>
   </div>
  )
}

export default Intro