import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="register-title">CREATE AN ACCOUNT</h1>
        <form action="" className="register-form">
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Username" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="password" type="password" />
          <input placeholder="Confirm Password" type="password" />
          <span className="register-agreement">
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="register-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
