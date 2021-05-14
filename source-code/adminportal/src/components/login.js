import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Admin');

  const onChangeType = event => {
    setType(event.target.value);
  }

  const onChangeEmail = event => {
    setUsername(event.target.value);
  }

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  const signin = () => {
    console.log(global.config.URI_ADMIN);
    console.log(process.env.PORT);
    // axios.post()
    
  }

  return (
    <div className="login_container">
      <div className="login_box">
          <div className="login_header">
              <p>Login</p>
          </div>
          <div className="login_form">
            <div className="login_radio">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="type" 
                  id="login_radio1" 
                  value="Admin" 
                  onChange={onChangeType} 
                  checked={type === 'Admin'}
                />
                <label className="form-check-label" for="login_radio1">Admin</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="type" 
                  id="login_radio2" 
                  value="Employee" 
                  onChange={onChangeType} 
                  checked={type === 'Employee'}
                />
                <label className="form-check-label" for="login_radio2">Employee</label>
              </div>
            </div>
            <div className="login_input">
                <label for="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Email" onChange={onChangeEmail}/>
            </div>
            <div className="login_input">
                <label for="pwd">Password</label>
                <input type="email" id="pwd" className="form-control" placeholder="Enter Password" onChange={onChangePassword}/>
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