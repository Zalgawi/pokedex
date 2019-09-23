import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/layout/Dashboard.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Dashboard />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
