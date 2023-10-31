import React from "react";
import "./Navbar.css";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <FormatListNumberedIcon className="icon" style={{color:"#594EF1"}} /> Reciepts
          </li>
          <li className="navbar-list-item">
            <BarChartIcon className="icon" /> Statistics
          </li>
          <li className="navbar-list-item">
            <CreditCardIcon className="icon" /> Cards
          </li>
          <li className="navbar-list-item">
            <LocalOfferOutlinedIcon className="icon" /> Offers
          </li>
          <li className="navbar-list-item">
            <AccountBoxOutlinedIcon className="icon" /> Accounts
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
