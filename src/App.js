import React, { Component } from "react";
import BigBurger from "./containers/BigBurger/BigBurger";
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
    <div>
      <Layout>
        <BigBurger />
      </Layout>
    </div>
    );
  }
}

export default App;
