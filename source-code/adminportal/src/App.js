import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/login";
import FirstLogin from "./components/firstlogin";
import Admin from "./components/admin";
import Employee from "./components/employee";
import Account from "./components/account";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/first" component={FirstLogin} />
      <Route path="/admin" component={Admin} />
      <Route path="/employee" component={Employee} />
      <Route path="/account" component={Account} />
    </Router>
  );
}

export default App;
