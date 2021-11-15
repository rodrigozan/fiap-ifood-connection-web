import React from "react";
import { BrowserRouter, Route, Switch, React } from 'react-dom';

import { isAuthenticated } from './services/Auth/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/" signup component={() => <h1>Signup</h1>} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
}