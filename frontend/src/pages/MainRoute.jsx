import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

import MobilePage from "./Mobile/MobilePage";
import PageNotFound from "./PageNotFound";
import Cart from "./Cart/Cart";
import DeliveryPage from "./DeliveryPage";
import Username from "../login/Username";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/mobile-page" element={<MobilePage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/deliverypage" element={<DeliveryPage />}></Route>

        <Route path="/user_name" element={<Username />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
