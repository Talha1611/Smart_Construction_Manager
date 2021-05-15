import axios from 'axios';
import React, { useState } from 'react';
import { 
  BrowserRouter as 
  useHistory
} from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Admin');
  const [newpass, setnewpass] = useState('');
  const [confirm, setconfirm] = useState('');
  const [first, setFirst] = useState(false);

  let history = useHistory();

  const onChangeType = event => {
    setType(event.target.value);
  }

  const onChangeEmail = event => {
    setUsername(event.target.value);
  }

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  const signin = async () => {

    const isFirst = await axios.get(global.config.URI_BE+"/admin/first/"+username);

    if(isFirst.data.message === 'true'){
      setFirst(true)
      return;
    };
    

    try {
      
      const login = (await axios.post(global.config.URI_BE+"/admin/login", {
        username: username,
        password: password,
      })).data;

      if(login.message === 'Admin signIn successfully.') {

        console.log(JSON.stringify(login.data.admin));

        // history.replace({
        //   pathname: '/first',
        //   username: {username}
        // });

        return;
      };

    } catch(err) {
      console.log(err)
    }

  }

  const onChangeNew = event => {
    setnewpass(event.target.value);
  }

  const onChangeConfirm = event => {
    setconfirm(event.target.value);
  }

  const update = async () => {

    if (newpass !== confirm) {
      console.log("Passwords Do not Match");
      return;
    }

    const res = await axios.post(global.config.URI_BE+'/users/'+props.history.location.username.username, {password: newpass})
    
    if (res.data.messsage === 'User Details Updated') {
      history.replace('/');
    };
    

  }

  const new_pass_form = () => {
    return(
      <div className="login_container">
        <div className="login_box">
            <div className="login_header">
                <p>New Passowrd</p>
            </div>
            <div className="login_form">
              <div className="login_input">
                  <label htmlFor="password">New Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter Password" onChange={onChangeNew} required={true}/>
              </div>
              <div className="login_input">
                  <label htmlFor="confirm">Confirm Password</label>
                  <input type="password" id="confirm" className="form-control" placeholder="Confirm Password" onChange={onChangeConfirm} required={true}/>
              </div>
              <div className="login_submit">
                  <button type="submit" onClick={update}>Submit</button>
              </div>
            </div>
        </div>
      </div>
    );
  }

  const login_form = () => {
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
                <label className="form-check-label" htmlFor="login_radio1">Admin</label>
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
                <label className="form-check-label" htmlFor="login_radio2">Employee</label>
              </div>
            </div>
            <div className="login_input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Email" onChange={onChangeEmail} required={true}/>
            </div>
            <div className="login_input">
                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd" className="form-control" placeholder="Enter Password" onChange={onChangePassword} required={true}/>
            </div>
            <div className="login_submit">
                <button type="submit" onClick={signin}>Login</button>
            </div>
          </div>
      </div>
    </div>
  )};

  return (first ? new_pass_form : login_form());
}

export default Login;