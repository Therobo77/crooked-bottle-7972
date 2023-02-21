import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from './PageNotFound';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
