import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MobilePage from "./Mobile/MobilePage";
import PageNotFound from "./PageNotFound";
import Cart from "./Cart/Cart";
import DeliveryPage from "./DeliveryPage";
import Username from "../login/Username";
import Register from "./../login/Register";
import Password from "./../login/Password";
import Recovery from "./../login/Recovery";
import SingleMobile from "./Mobile/SingleMobile";

import DashboardMain from "./Admin/DashboardMain";
import ProductList from "./Admin/ProductList";
import AdminAddProduct from "./Admin/AdminAddProduct";

import Reset from "./../login/Reset";
import SingleFashion from "./Fashion/SingleFashion";
import Profile from "../login/Profile";
import { AuthorizeUser,ProtectRoute } from './../middleware/auth';

import AppliancesPage from "./Appliances/AppliancesPage";
import ElectronicsPage from "./Electronics/ElectronicsPage";
import FashionPage from "./Fashion/FashionPage";
import FurniturePage from "./Furniture/FurniturePage";
import GroceryPage from "./Grocery/GroceryPage";
import Payment from "../pages/PaymentPage/Payment";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mobile-page" element={<MobilePage />}></Route>
        {/* <Route path="/mobile-page" element={<AuthorizeUser><MobilePage /></AuthorizeUser>}></Route> */}
        <Route path="/appliances-page" element={<AppliancesPage />}></Route>
        <Route path="/electronics-page" element={<ElectronicsPage />}></Route>
        <Route path="/Fashion-Page" element={<FashionPage />}></Route>
        <Route path="/Grocery-page" element={<GroceryPage />}></Route>
        <Route path="/Furniture-Page" element={<FurniturePage />}></Route>

        <Route path="/single/:id" element={<SingleMobile />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<AdminAddProduct />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        {/* Vikash Route */}
        <Route path="/user_name" element={<Username />}></Route>
        
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>

        <Route path="/reset" element={<Reset />}></Route>

        {/* Private Route */}
        {/* <Route path="/password" element={<Password />}></Route> */}
        <Route path="/password" element={<ProtectRoute><Password /></ProtectRoute>}></Route>


        {/* Protect Route */}
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route path="/profile" element={<AuthorizeUser><Profile /></AuthorizeUser>}></Route>

        
        <Route path="/deliverypage" element={<DeliveryPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
