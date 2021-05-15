import axios from 'axios';
import React, { useState } from 'react';
import { 
  BrowserRouter as 
  useHistory
} from "react-router-dom";

const FirstLogin = (props) => {

  const [newpass, setnewpass] = useState('');
  const [confirm, setconfirm] = useState('');
  let history = useHistory();

  // React.useEffect(()=>{
  //   console.log(JSON.stringify(props));
  //   console.log(JSON.stringify(props.history.location.username.username));
  // })

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

  return (
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

export default FirstLogin;