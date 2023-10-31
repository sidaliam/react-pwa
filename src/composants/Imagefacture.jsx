import React from "react";
import imagefacture from "../images/Rectangle 34624289 (1).png"
import { CancelOutlined } from "@mui/icons-material";
const Imagefacture = ({setopen3}) => {
  return (
      <div className="reserve2">
        <div className="Container2">
          <CancelOutlined
            className="rClose"
            style={{ color: "#C4C4C4" }}
            onClick={() => setopen3(false)}
          />
          <img style={{ marginTop: "150px" }} src={imagefacture} alt="" />
        </div>
      </div>

  );
};

export default Imagefacture;
