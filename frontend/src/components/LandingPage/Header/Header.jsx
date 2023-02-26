import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  
} from '@chakra-ui/react' 
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="header_search">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon />
      </div>

      <div className="header_login">
        <Menu>
          <MenuButton _hover={"curser:pointer "} >
            Log in
          </MenuButton>
          <MenuList color={"black"} fontSize={"small"}>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>YouKart Plus Zone</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Whishlist</MenuItem>
            <MenuItem>Rewards</MenuItem>
            <MenuItem>Gift Cards</MenuItem>
          </MenuList>
        </Menu>
        {/* <button>Log in</button> */}
      </div>
      <div className="header_admin">
        <p>Become A Seller </p>
      </div>
      <div className="header_more">
      <Menu>
          <MenuButton _hover={"curser:pointer "} >
            More
          </MenuButton>
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
        <ShoppingCartIcon />
        <p>cart</p>
      </div>
    </div>
  );
};

export default Header;
