import React, { useState, useEffect } from "react";
import Main from "./components/Main/Main";

import ProductDetailsMain from "./components/Products/ProductDetails/ProductDetailsMain";
import "./App.css";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
const style = {
  wrapper: "overflow-x-hidden w-[100vw] font",
};
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ProductDetailsMain />} />
      </Routes>
    </BrowserRouter>
  );
}
