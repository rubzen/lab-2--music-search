import React, { Component } from "react";

import Layout from "../Layout";
import Home from "../../pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;
