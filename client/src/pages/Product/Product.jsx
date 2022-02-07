import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Kicks from "../../Images/luis-felipe-lins-LG88A2XgIXY-unsplash-removebg-preview.png";
import "./Product.css";
import { Add, Remove } from "@material-ui/icons";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Product = () => {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product-wrapper">
        <div className="product-image_container">
          <img src={Kicks} alt="" className="product-image" />
        </div>
        <div className="product-info_container">
          <h1 className="product-title">Super Kicks</h1>
          <p className="product-desc">
            Select from Different Varities of Color, your Favorite Iphone with
            diffrent colors and forms. Do well to get it Now and it would be
            possible getting a Discount.
          </p>
          <span className="product-price">$500</span>
          <div className="product-filter_container">
            <div className="product-filter">
              <span className="product-filter_title">Color</span>
              <div
                className="product-filter_color"
                style={{ backgroundColor: `#243acc` }}
              ></div>
              <div
                className="product-filter_color"
                style={{ backgroundColor: `#acefed` }}
              ></div>
              <div
                className="product-filter_color"
                style={{ backgroundColor: `#24facc` }}
              ></div>
              <div className="product-filter">
                <div className="product-filter_title"> Size</div>
                <select className="product-filter_size">
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-add_container">
            <div className="product-amount_container">
              <Remove />
              <span className="product-amount">1</span>
              <Add />
            </div>
            <button className="product-amount_button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
