import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="header_search">
        <input type="text" placeholder="Search for products, brands and more"/>
        <SearchIcon/>
      </div>
     
      <div className="header_login">
        <button>Log in</button>
      </div>
      <div className="header_admin">
        <p>Admin</p>
      </div>
      <div className="header_more">
        <p>More</p>
        <ExpandMoreIcon/>
      </div>
      <div className="header_cart">
      <ShoppingCartIcon/>
        <p>cart</p>
      </div>
    </div>
  );
};

export default Header;
