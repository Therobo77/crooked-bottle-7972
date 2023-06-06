import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link, useNavigate } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../../Redux/ProductReducer/action";
const Header = () => {
  const [search,setsearch]=useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAuth=useSelector((store)=> store.authreducer.isAuth)

  const handleSearch = () => {
    dispatch(searchData(search));
    navigate("/search");
  }

  return (
    <div className="header">
 
      <div className="header_logo">
      <Link to="/"><img src={logo} alt="logo"></img></Link>
        
      </div>

      <div className="header_search">
        <input type="search" onChange={(e)=>setsearch(e.target.value)} placeholder="Search for products, brands and more" />
        <SearchIcon onClick={handleSearch} />
      </div>

      <div className="header_login">
       
       
        {isAuth? <button>Log Out</button>:<Link to="/login"><button>Log in</button> </Link> }
       
      
      </div>
      <div className="header_admin">
        <Link to="/admin">
          <p>Admin</p>
        </Link>
      </div>
      <div className="header_more">
        <Menu>
          <MenuButton _hover={"curser:pointer "}>More</MenuButton>
          <MenuList color={"black"} fontSize={"small"}>
            <MenuItem>Notification Prefrences</MenuItem>
            <MenuItem>24x7 Customer Care</MenuItem>
            <MenuItem>Advertise</MenuItem>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
        <ExpandMoreIcon />
      </div>
      <div className="header_cart">
        <Link to="/cart">
       <ShoppingCartIcon />  <span>Cart</span> 
          
        </Link>
      </div>
     
    </div>
  );
};

export default Header;
