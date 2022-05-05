import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductAttributes from "./components/ProductAttributes";
import AddProductAttributes from "./components/AddProductAttributes";
import UpdateProductAttributes from "./components/UpdateProductAttributes";
import LogOut from "./components/LogOut";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/add-product" />
      <Link to="/update-product" />
      <Routes>
        <Route path="/" element={<ProductAttributes />} />
        <Route path="/add-product" element={<AddProductAttributes />} />
        <Route path="/update-product" element={<UpdateProductAttributes />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
