import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="productlist-container">
      <Navbar />
      <h1>Shoes</h1>
      <div className="productlist-filter_container">
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select className="productlist-select">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>X</option>
            <option>M</option>
            <option>S</option>
            <option>XL</option>
          </select>
        </div>
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select>
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
