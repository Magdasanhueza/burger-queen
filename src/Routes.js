import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import Kitchen from "./components/Kitchen/Kitchen";
import Table from "./components/Table/Table";
import Breakfast from "./components/Breakfast/Breakfast";
import Ready from "./components/Ready/Ready";
import FirstScreen from "./components/FirstScreen/FirstScreen";


const Routes = () => {
  return (
    <>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/kitchen" component={Kitchen}></Route>
          <Route path="/table" component={Table}></Route>
          <Route path="/Breakfast" component={Breakfast} />
          <Route path="/Ready" component={Ready} />
          <Route path="/" component={FirstScreen} />

        </Switch>
      </Router>
    </>
  );
};

export default Routes;
