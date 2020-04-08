import React, { Component } from "react";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "materialize-css";

import "./index.css";

export default class App extends Component {
  render() {
    const routes = useRoutes(false);
    return (
      <BrowserRouter>
        <div>{routes}</div>;
      </BrowserRouter>
    );
  }
}
