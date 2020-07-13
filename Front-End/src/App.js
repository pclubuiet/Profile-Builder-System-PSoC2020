import React from "react";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import {Navbar} from 'reactstrap';
import Editor from './components/editor';
import { BrowserRouter,Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter path="/signup" component={Signup}>
    <Navbar color="light" light expand="md">
      <div className="header">        
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/editor">Editor</Link>

      </div>
    </Navbar>
    {/* <Row>
      <Col md="6"></Col>
      <Col xs="12" md="6"> */}
      <Route component={Signup} path="/signup" />
      <Route component={Login} path="/login" />
      {/* </Col>
      </Row> */}
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Editor} path="/editor" />
    </BrowserRouter>
  );
}

export default App;
