import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/login"
import Dashboard from "./components/dashboard"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
