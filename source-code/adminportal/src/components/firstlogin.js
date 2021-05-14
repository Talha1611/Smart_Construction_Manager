import axios from 'axios';
import React, { useState } from 'react';

const FirstLogin = () => {

  const [newpass, setnewpass] = useState('');
  const [confirm, setconfirm] = useState('');

  const onChangeNew = event => {
    setnewpass(event.target.value);
  }

  const onChangeConfirm = event => {
    setconfirm(event.target.value);
  }

  const update = () => {

    if (newpass !== confirm) console.log("Passwords Do not Match") 
    
  }

  return (
    <div className="login_container">
      <div className="login_box">
          <div className="login_header">
              <p>New Passowrd</p>
          </div>
          <div className="login_form">
            <div className="login_input">
                <label for="password">New Password</label>
                <input type="password" id="password" className="form-control" placeholder="Enter Password" onChange={onChangeNew}/>
            </div>
            <div className="login_input">
                <label for="confirm">Confirm Password</label>
                <input type="password" id="confirm" className="form-control" placeholder="Confirm Password" onChange={onChangeConfirm}/>
            </div>
            <div className="login_submit">
                <button type="submit" onClick={update}>Submit</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FirstLogin;