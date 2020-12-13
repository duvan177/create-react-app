import React from "react";
import { Route , Switch} from "react-router-dom";
import { Estaciones, RegistroEstaciones} from "../../pages";

export default function estaciones() {
  return (
    <Switch>

      <Route 
        exact 
        path="/auth/admin/dashboard/estaciones"
        component={Estaciones} />
      <Route exact 
      path="/auth/admin/dashboard/estaciones/registro" 
      component={RegistroEstaciones} />
      </Switch>
  );
}
