import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="header">
      <a href="#">
        <img src="" alt="" />
      </a>
      <div>
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
    </div>
  );
};

export default Navbar;
