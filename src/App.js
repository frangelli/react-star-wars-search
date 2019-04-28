import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import Details from "./pages/Details";

require("./App.scss");
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="col-xs-12">
          <h1 className="page-title">STAR WARS CHARACTERS INFO</h1>
        </header>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/details" exact component={Details} />
            </Switch>
          </HashRouter>
        </Provider>
      </Fragment>
    );
  }
}
