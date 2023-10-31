import React from "react";
import { CancelOutlined } from "@mui/icons-material";
import imagecodebar from "../images/image 1.png";
import imagephone from "../images/2c922ed472f094b4fef68880c74d20ff.gif"
import "./codebarimg.css"
const Imgecodebar = ({ setopen2 }) => {
  return (
    <div className="reserve2">
      <div className="Container2">
        <CancelOutlined
          className="rClose"
          style={{ color: "#C4C4C4" }}
          onClick={() => setopen2(false)}
        />
        <img className="image2" src={imagephone} alt="" />
        <img style={{marginTop:"150px"}}src={imagecodebar} alt="" />
      </div>
    </div>
  );
};

export default Imgecodebar;
