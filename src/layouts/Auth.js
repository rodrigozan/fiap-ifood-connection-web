import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import AuthView from "../views/auth/Auth";

export default function Auth() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full h-screen py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
          ></div>
          <>
            <Switch>
              <Route path="/auth/login" exact component={AuthView} />
              <Redirect from="/login" to="/auth/login" />
              <Redirect from="/register" to="/auth/login" />
            </Switch>
            <FooterSmall absolute />
          </>
        </section>
      </main>
    </>

  );

}
