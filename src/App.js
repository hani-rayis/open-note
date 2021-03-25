import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./auth/Signin";
import SignUp from "./auth/Signup";
import Dashboard from "./dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
