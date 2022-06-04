import React, { useContext } from "react";
import "./Work.css";
import melorra from '../../img/melorra_1.jpg'
import Zwayam from '../../img/zwayam_mark.png'

import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{color : darkMode ? 'white' : ''}} >
            Worked & Working for 
          </span>
          <span>Zwayam & Melorra</span>
          <span>
            I was working for Zwayam which is an intelligent recruitment 
            <br />
            software to manage your entire hiring process from sourcing
            <br/>
             to screening to selection.
            <br />
            <a href="https://www.zwayam.com/#/" target="_blank"> Zwayam website link</a>
            <p></p>
           Melorra is e-commerse site which sells gold jewellery both
            <br />
            on-line and offline.
            <br/>
            <a href="https://www.melorra.com/" target="_blank"> Melorra website link</a>
            <p/>
            I continuously try to upgrade my skills so here is my repository link where I keep <br/>
            all my projects.
            <br/>
            <a href="https://github.com/kanaktyagi?tab=repositories" target="_blank">Git repository link</a>
          </span>
         
        <Link spy={true} to="Contact" smooth={true}>
            <button className="button s-button">Hire Me</button>
            </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
         <motion.div className="w-mainCircle"
         initial={{ rotate: 45 }}
         whileInView={{ rotate: 0 }}
         viewport={{ margin: "-40px" }}
         transition={{ duration: 3.5, type: "spring" }}
               >
              <div className="w-secCircle">
                <img src={melorra} alt="" className="w-image" style={{transform: "scale(1.1)"}} />
              </div>
          <div className="w-secCircle">
               <img src={Zwayam} alt="" className="w-image" />
              </div>
             <div className="w-secCircle">
                 <img src={HeartEmoji} alt="" className="w-image" />
              </div>
             <div className="w-secCircle">
                 <img src={Glasses} alt="" className="w-image" />
             </div>
            <div className="w-secCircle">
             <img src={Humble} alt="" className="w-image" />
             </div>
       
           </motion.div>
        {/* background Circles */}
           <div className="w-backCircle blueCircle"></div>
             <div className="w-backCircle yellowCircle"></div>
    </div>
  </div>
  );
};

export default Works;