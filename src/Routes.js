import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";

const Routes = () => {
  return (
    <>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
