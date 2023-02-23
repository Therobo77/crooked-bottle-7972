import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

import MobilePage from "./Mobile/MobilePage";
import PageNotFound from "./PageNotFound";
import Cart from "./Cart/Cart";
import Username from "../login/Username";
import Register from './../login/Register';
import Password from './../login/Password';
import Recovery from './../login/Recovery';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/mobile-page" element={<MobilePage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        {/* Vikash Route */}
        <Route path="/user_name" element={<Username />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
