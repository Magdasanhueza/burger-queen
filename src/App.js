import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import BigBurger from "./containers/BigBurger/BigBurger";
//import Layout from "./components/Layout/Layout";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes></Routes>
        {/*<div>
          <Layout>
            <BigBurger />
          </Layout>
        </div>*/}
      </Router>
    );
  }
}

export default App;
