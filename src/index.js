import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import AccueilLayout from "layouts/accueil";
import HomeLayout from "layouts/home";

import ComparisantLayout from "layouts/comparisant";
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/accueil`} component={AccueilLayout} />
      <Route path={`/home`} component={HomeLayout} />
      <Route path={`/comparisant`} component={ComparisantLayout} />
      <Redirect from={`/`} to='/home/test' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
