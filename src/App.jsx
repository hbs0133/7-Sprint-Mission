import React from "react";
import "./assets/styles/reset.css";
import "./assets/styles/common.css";
import SecondHandMarket from "./pages/SecondHandMarket/SecondHandMarket";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SecondHandMarketAddItem } from "./pages/SecondHandMarketAddItem/SecondHandMarketAddItem";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/items" element={<SecondHandMarket />} />
        <Route path="/additem" element={<SecondHandMarketAddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;