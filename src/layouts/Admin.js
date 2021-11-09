import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Products from "views/admin/Products.js";
import ProductDetails from "views/admin/ProductDetails.js";
import ProductCreate from "views/admin/ProductCreate.js";
import Insights from "views/admin/Insights.js";
import Users from "views/admin/Users.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/produtos" exact component={Products} />
            <Route path="/admin/produto/:id" exact component={ProductDetails} />
            <Route path="/admin/cadastrar-produto/" exact component={ProductCreate} />
            <Route path="/admin/insights" exact component={Insights} />
            <Route path="/admin/minha-conta" exact component={Users} />
            <Redirect from="/admin" to="/admin/produtos" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
