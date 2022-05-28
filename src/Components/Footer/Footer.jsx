import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>tyagiknk.india@gmail.com</span>
        <div className="f-icons">
        <a href='https://www.instagram.com/tyagi.knk/' target="_blank" >
          <Insta color="white" size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/kanak-tyagi-6949478b/' target="_blank">
          <LinkedIn color="white" size={"3rem"}/>
          </a>
          <a href='https://github.com/kanaktyagi?tab=repositories' target="_blank">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;