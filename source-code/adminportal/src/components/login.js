import React from 'react';

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
            <div className="login_radio">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" id="login_radio1" value="Admin"/>
                <label className="form-check-label" for="login_radio1">Admin</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" id="login_radio2" value="Employee"/>
                <label className="form-check-label" for="login_radio2">Employee</label>
              </div>
            </div>
            <div className="login_input">
                <label for="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="login_input">
                <label for="pwd">Password</label>
                <input type="email" id="pwd" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="login_submit">
                <button type="submit" onClick={signin}>Login</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;