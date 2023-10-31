import React from "react";
import { CancelOutlined } from "@mui/icons-material";
import "./Start.css";
import image1 from "../images/imageaa.png"

const Start = ({ setopen }) => {
  const handleclick = async () => {
    setopen(false);
  };

  return (
    <div className="reserve">
       
      <div className="Container">
        <CancelOutlined className="rClose" style={{color:"#C4C4C4"}} onClick={() => setopen(false)} />
        <br />
        <br />
        <br />
        <img className="image2" src={image1}/>
        <br />
        <br />
        <br />
        <span className="text2">There's a fresh receipt in your inbox!</span>
        
        <button className="rbutton" onClick={handleclick}>
          Reserve now!
        </button>
        <span className="text3">Remind me later </span>
      </div>
    </div>
  );
};

export default Start;
