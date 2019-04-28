import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import Details from "./pages/Details";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details" exact component={Details} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
