import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Artists from "../../pages/Artists/Artists";
import Albums from "../../pages/Albums/Albums";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artists/:artistId" component={Artists} />
          <Route exact path="/albums/:albumsId" component={Albums} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
