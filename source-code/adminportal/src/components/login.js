import React from 'react';
import { Link } from 'react-router-dom';

const signin = () => {
  
}

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_box">
          <div className="login_header">
              <p>Login</p>
          </div>
          <div className="login_form">
              <div className="login_input">
                  <label for="email">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter Email"/>
              </div>
              <div className="login_input">
                  <label for="pwd">Password</label>
                  <input type="email" id="pwd" className="form-control" placeholder="Enter Password"/>
              </div>
              <div className="login_submit">
                  <button type="submit" onclick="login()">Login</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;