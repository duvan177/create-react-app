// import React from 'react'
// import {  Route } from "react-router-dom";
// import { LoginAdmin, MapView, Dashboard, Entities } from "../../pages";

// export default function entidades() {
//     return (
//         <>
//         <Route exact path="/" component={MapView} />
//         <Route exact path="/auth/admin/dashboard" component={Dashboard} />    <Route exact path="/auth/admin/login" component={LoginAdmin} />
//         </>
//     )
// }

import React from "react";
import { Route , Switch} from "react-router-dom";
import { Entidades, RegistroEntidades } from "../../pages";

export default function entidades() {
  return (
    <Switch>

      <Route 
        exact 
        path="/auth/admin/dashboard/entidades"
        component={Entidades} />
      <Route exact 
      path="/auth/admin/dashboard/entidades/registro" 
      component={RegistroEntidades} />
      </Switch>
  );
}
