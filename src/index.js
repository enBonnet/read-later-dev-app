import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import App from "./App";
import HomePage from "./HomePage";
import ToReadPage from "./ToReadPage";

import { StorageProvider } from "./Storage";
import "./index.css";

ReactDOM.render(
  <StorageProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <ToReadPage path="/toread" />
      </App>
    </Router>
  </StorageProvider>,
  document.getElementById("root")
);
