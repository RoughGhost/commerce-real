import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, MenuBook, MenuOpen } from "@material-ui/icons";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">Shop</a>
    </p>
    <p>
      <a href="#possibility">Blog</a>
    </p>
    <p>
      <a href="#features">About</a>
    </p>
    <p>
      <a href="#blog">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id="header">
      <a href="#">
        <img src="" alt="" />
      </a>
      <div className="menu-links">
        <ul id="navbar">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </li>
        </ul>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <MenuBook
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <MenuOpen
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className=" navbar-menu_container scale-up-center">
            <div className="menu-container">
              <Menu />
              <div className="navbar-links_sign">
                <p>Sign in </p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
