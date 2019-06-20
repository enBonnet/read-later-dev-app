import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import ToReadPage from "./ToReadPage";

import { StorageProvider } from "./Storage";
import "./index.css";

ReactDOM.render(
  <StorageProvider>
    <Router>
      <Header />
      <section className="content">
        <Route path="/" exact component={HomePage} />
        <Route path="/toread" component={ToReadPage} />
      </section>
    </Router>
  </StorageProvider>,
  document.getElementById("root")
);
