import React from "react";
import { Route , Switch} from "react-router-dom";
import { Sensores, RegistroSensores} from "../../pages";

export default function sensores() {
  return (
    <Switch>

      <Route 
        exact 
        path="/auth/admin/dashboard/sensores"
        component={Sensores} />
      <Route exact 
      path="/auth/admin/dashboard/sensores/registro" 
      component={RegistroSensores} />
      </Switch>
  );
}
