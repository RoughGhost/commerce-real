import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">SIGN IN </h1>
        <form action="" className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>CREATE</button>
          <a href="">DONT'T REMEMBER THE PASSWORD?</a>
          <a href="">CREATE NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
