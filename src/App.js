import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Components

import useToken from './components/Token/Token'

// Styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Auth setToken={setToken} />
  }

  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/auth/login" component={Auth} />
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
