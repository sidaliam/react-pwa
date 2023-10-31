import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-container">
        <input type="text" placeholder="Search for receipt here" />
      </div>
      <div className="rectangle">
      </div>
    </div>
  );
};

export default Searchbar;
