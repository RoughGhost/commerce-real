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
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <div className="productlist-container">
      <Navbar />
      <h1>Shoes</h1>
      <div className="productlist-filter_container">
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select
            className="productlist-select"
            onChange={handleFilters}
            name="color"
          >
            <option>Color</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select
            className="productlist-select"
            onChange={handleFilters}
            name="size"
          >
            <option>Size</option>
            <option>XS</option>
            <option>X</option>
            <option>M</option>
            <option>S</option>
            <option>XL</option>
          </select>
        </div>
        <div className="productlist-filter">
          <span className="productlist-span">Filter Products:</span>
          <select
            className="productlist-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
