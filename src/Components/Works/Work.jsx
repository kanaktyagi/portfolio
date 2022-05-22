import React, { useContext } from "react";
import "./Work.css";
import melorra from '../../img/melorra_1.jpg'
import Zwayam from '../../img/zwayam_mark.png'

import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"

const Works = () => {


  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
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
            <p></p>
           Melorra is e-commerse site which sells gold jewellery both
            <br />
            on-line and offline.
            <br/>
            <a href="https://www.melorra.com/" target="_blank"> Melorra website link</a>
          </span>
            <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      <div className="w-mainCircle">
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
       
      </div>
      {/* background Circles */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  </div>
  );
};

export default Works;