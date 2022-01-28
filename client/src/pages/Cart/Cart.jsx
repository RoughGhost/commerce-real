import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import FirstImg from "../../Images/istockphoto-1284061545-170667a-removebg-preview.png";
import SecondImg from "../../Images/giorgio-trovato-_0n2OqRTzKA-unsplash-removebg-preview.png";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <div className="cart-wrapper">
        <h1 className="cart-title">YOUR BAG</h1>
        <div className="cart-top">
          <button
            className="cart-top_button"
            style={{
              border: ` ${(props) => props.type === "filled" && "none"}`,
              backgroundColor: `${(props) =>
                props.type === "filled" ? "black" : "transparent"}`,
              color: `${(props) => props.type === "filled" && "white"}`,
            }}
          >
            CONTINUE SHOPPING
          </button>
          <div className="cart-top_text">
            <span className="cart-toplist">Shopping Bag(2)</span>
            <span className="cart-toplist">Your Wishlist(0)</span>
          </div>
          <button className="cart-top_button">Checkout Now</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            <div className="cart-product">
              <div className="cart-product_detail">
                <img src={FirstImg} alt="" className="cart-image" />
                <div className="cart-detail">
                  <span className="product-name">
                    <b>Product:</b> JESSIE DECKING SHOE
                  </span>
                  <span className="product-id">
                    <b>ID:</b> 20102304
                  </span>
                  <span
                    className="product-color"
                    color="black"
                    style={{ backgroundColor: `#000000` }}
                  />
                  <div className="price-details">
                    <div className="price-amount_container">
                      <Add />
                      <div className="product-amount"></div>
                      <Remove />
                    </div>
                    <div className="product-price">$180 </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="product-header" />
            <div className="cart-product">
              <div className="cart-product_detail">
                <img src={SecondImg} alt="" className="cart-image" />
                <div className="cart-detail">
                  <span className="product-name">
                    <b>Product:</b> Classic Kicks
                  </span>
                  <span className="product-id">
                    <b>ID:</b> 20102001
                  </span>
                  <span
                    className="product-color"
                    color="gray"
                    style={{ backgroundColor: `gray` }}
                  />
                  <span className="product-size">
                    <b>Size:</b> 37.5
                  </span>
                  <div className="price-details">
                    <div className="price-amount_container">
                      <Add />
                      <div className="product-amount">2</div>
                      <Remove />
                    </div>
                    <div className="product-price">$150 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div
              className="summary-items"
              style={{
                fontSize: `${(props) => props.type === "total" && "500"}`,
                fontWeight: `${(props) => props.type === "total" && "200"}`,
              }}
            >
              <span className="summary-item_text">Subtotal:</span>
              <span className="summary-item_price">$950</span>
            </div>
            <div
              className="summary-items"
              style={{
                fontSize: `${(props) => props.type === "total" && "500"}`,
                fontWeight: `${(props) => props.type === "total" && "200"}`,
              }}
            >
              <span className="summary-item_text">Shipping:</span>
              <span className="summary-item_price">$9.50</span>
            </div>
            <div
              className="summary-items"
              style={{
                fontSize: `${(props) => props.type === "total" && "500"}`,
                fontWeight: `${(props) => props.type === "total" && "200"}`,
              }}
            >
              <span className="summary-item_text">Shipping Estimate</span>
              <span className="summary-item_price">-$9.50</span>
            </div>
            <div
              className="summary-items"
              style={{
                fontSize: `${(props) => props.type === "total" && "500"}`,
                fontWeight: `${(props) => props.type === "total" && "200"}`,
              }}
              type="total"
            >
              <span className="summary-item_text">Total:</span>
              <span className="summary-item_price">$80</span>
            </div>
            <button className="summary-button">Checkout Button</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
