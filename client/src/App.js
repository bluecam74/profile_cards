import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import { withCookies } from 'react-cookie';



class App extends Component {

  state = {

    menuToggle: false,
    lastPage: "",
    redirect: false,
    
  };


  render() {

    return (
<div>
      <Router>
        <div>

          <div name="spacer" style={{ height: "1rem" }}></div>

          <div className="container-fluid">

            <Route exact path="/" render={(routeProps) => (<Dashboard {...routeProps}
              state={this.state}
            />)}
            />

          </div>
          
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default withCookies(App);
