import React from "react";
import { BrowserRouter } from "react-router-dom";

import {AdminRoutes , AlarmasRoutes, EntidadesRoutes, EstacionesRoutes, SensoresRoutes} from './components'
export default function Routes() {
  return (
    <BrowserRouter>
      <AdminRoutes/>
      <AlarmasRoutes />
      <EntidadesRoutes />
      <EstacionesRoutes />
      <SensoresRoutes />
      </BrowserRouter>
  )
}
