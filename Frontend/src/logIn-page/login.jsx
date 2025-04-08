import React from "react";
import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
          />

          <button  type="submit" class="btn btn-primary" >
          <Link to="/product" style={{color: "white",textDecoration: "none",padding:"10px 100px 10px 100px"}}> Login </Link>
          </button>
          
          
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
         <Link to="/" className = "Link">
          <span>Register</span>
          </Link>
        
      </div>
    </div>
  );
};

export default Login;