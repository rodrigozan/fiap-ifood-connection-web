import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Components

import useToken from './components/Token/Token'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

const token = localStorage.getItem('ifood:token')

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth/login">
        {token ? <Redirect to="/admin" /> : <Auth />}
      </Route>
      <Route path="/admin">
        {!token ? <Redirect to="/auth/login" /> : <Admin />}
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
