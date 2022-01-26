import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import master from "../../Images/download-removebg-preview.png";
import verve from "../../Images/verve-card-removebg-preview.png";
import visa from "../../Images/visa-card-removebg-preview.png";

const Footer = () => {
  return (
    <div
      className="section-p1 "
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
      }}
    >
      <div>
        <img src="" alt="" />
        <h4>Contact</h4>
        <p>
          {" "}
          <strong>Address:</strong> No 1 Ibuchim close Woji Estate, Port
          Harcourt.
        </p>
        <p>
          {" "}
          <strong>Phone:</strong> +234911235869{" "}
        </p>
        <p>
          {" "}
          <strong>Hours:</strong> 10:00 - 19:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <Facebook className="i" />
            <Twitter className="i" />
            <Instagram className="i" />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About Us</h4>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlish</a>
        <a href="#">Track Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <div className="row">
          <p>Secure Payment Gateway</p>
          <img src={master} alt="Visa Card" />
          <img src={verve} alt="Verve Card" />
          <img src={visa} alt="Master Card" />
        </div>
      </div>
      <div className="copyright">
        <p> 2022, All Rights Reserved Strivesteve </p>
      </div>
    </div>
  );
};

export default Footer;
