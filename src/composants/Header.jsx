import React, { useState } from "react";
import image1 from "../images/Fichier 4-8 1.png";
import Image2 from "../images/Group 2060.svg";
import "./Header.css";
import Imgecodebar from "./Imgecodebar";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
const Header = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [open2, setopen2] = useState(false);
  return (
    <div className="header">
      <div className="up">
        <img className="img1" src={image1}/>
        <img className="img2" src={Image2} onClick={() => setopen2(true)} />
      </div>
      <br />
      <br />
      <div
        className="colorOption light"
        onClick={() => dispatch({ type: "LIGHT" })}
      ></div>
      <div
        className="colorOption dark"
        onClick={() => dispatch({ type: "DARK" })}
      ></div>


      <div className="down">
        <h2 className="header-text" > 
          Welcome To <span className="black-text">FTR Client</span>
        </h2>
        <h4 className="header-text">Let Store Owners Scan Your Barcode</h4>
      </div>
      {open2 && <Imgecodebar setopen2={setopen2} />}
    </div>
  );
};

export default Header;
