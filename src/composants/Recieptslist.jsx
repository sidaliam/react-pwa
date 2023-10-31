import React, { useState } from "react";
import { Reciepts } from "../ReiceptsData";
import "./Recieptslist.css";
import image1 from "../images/bdfa85ad582ae002b5c2d30001f13326.png"
import Imagefacture from "./Imagefacture";

const Recieptslist = () => {
  const [open3,setopen3]=useState(false)
  const [showDetails, setShowDetails] = useState([]);
  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div>
      {Reciepts.map((item, index) => (
        <div key={index} className="listreciepts">
          <div className="element">
            <div className="left">
              <h4 className="label" >{item.label}</h4>
              <h6 style={{ color: "#9E9E9E" }}>{item.Date}</h6>
            </div>
            <div className="middle">
              <h4 className="label ">{item.Price}.00</h4>
              <h7 style={{ color: "#9E9E9E" }}>{item.items} items </h7>
            </div>
            <div className="right" onClick={() => toggleDetails(index)}>
              {/* Afficher la flèche ou un autre indicateur ici */}
            </div>
          </div>
          {showDetails[index] && (
            <div className="details-container">
              <div className="up-details">
                <h3>{item.label} </h3>
                <button className="btn-details" style={{backgroundColor:"#49D806"}}>Paid</button>
              </div>

              <h5 style={{ color: "#9E9E9E" }} >{item.email}</h5>
              <img onClick={()=>{setopen3(true)}} className="img-details" src={image1}/>
            </div>
          )}
        </div>
      ))}
      {open3 && <Imagefacture setopen3={setopen3}/>}
    </div>
  );
};

export default Recieptslist;
