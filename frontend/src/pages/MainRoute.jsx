import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MobilePage from "./Mobile/MobilePage";
import PageNotFound from "./PageNotFound";
import Cart from "./Cart/Cart";
import DeliveryPage from "./DeliveryPage";
import Username from "../login/Username";
import Register from './../login/Register';
import Password from './../login/Password';
import Recovery from './../login/Recovery';
import SingleMobile from "./Mobile/SingleMobile";



import Reset from './../login/Reset';
import SingleFashion from "./Fashion/SingleFashion";
import Profile from "../login/Profile";



const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/mobile-page" element={<MobilePage />}></Route>
        <Route path="/single/:id" element={<SingleMobile />} />
      
        <Route path="/cart" element={<Cart />}></Route>
        
        {/* Vikash Route */}
        <Route path="/user_name" element={<Username />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>

        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        
        <Route path="/deliverypage" element={<DeliveryPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
