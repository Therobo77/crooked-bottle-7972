import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/Logo.png"
import "./Navbar.css"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import MoreT from './MoreT';
import LoginT from './LoginT';
import { Tooltip } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <div className='Navbar'>

    <div className='Navbar_first'>
      <img src={logo} alt="youkart Logo" />
    </div>
    <div className='Navbar_second'>
    <input type="text" placeholder='Search for product, brand and more'/>
      <SearchIcon/>
    </div>
    <div className='Navbar_third'>
   <tippy>
   <button>Login</button>
   </tippy>
    </div>
    
   

    <div className='Navbar_Seller'>
    <p>Become a Seller</p>
      
    </div>
    <div className='Navbar_fourth'>
    <Tippy content={ <MoreT/> } interactive="true"> 
    <span>More</span>
    </Tippy>
        <span><ExpandMoreIcon/></span>
    </div>
    <div className='Navbar_fifth'>
        <ShoppingCartIcon/>
        <p>Cart</p>
    </div>


    </div>
  )
}

export default Navbar