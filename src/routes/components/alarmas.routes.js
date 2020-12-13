import React from "react";
import { Route , Switch} from "react-router-dom";
import { Alarmas, RegistroAlarmas } from "../../pages";

export default function alarmas() {
  return (
    <Switch>

      <Route 
        exact 
        path="/auth/admin/dashboard/alarmas"
        component={Alarmas} />
      <Route exact 
      path="/auth/admin/dashboard/alarmas/registro" 
      component={RegistroAlarmas} />
      </Switch>
  );
}
