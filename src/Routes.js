import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import Kitchen from "./components/Kitchen/Kitchen";

const Routes = () => {
  return (
    <>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/kitchen" component={Kitchen}></Route>
          
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
