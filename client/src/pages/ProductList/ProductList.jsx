import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import "./ProductList.css";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  return (
    <div className="productlist-container">
      <Navbar />
      <h1>Shoes</h1>
      <div className="productlist-filter_container">
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select className="productlist-select">
            <option disabled>Color</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select className="productlist-select">
            <option disabled>Size</option>
            <option>XS</option>
            <option>X</option>
            <option>M</option>
            <option>S</option>
            <option>XL</option>
          </select>
        </div>
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select className="productlist-select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
