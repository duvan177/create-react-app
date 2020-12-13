import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginAdmin,
  MapView,
  Dashboard,
  Usuarios,
  RegistroUsuarios,
  MostrarUsuarios
} from "../../pages";

import PrivateRoute from '../../middleware/auth.component'

export default function admin() {
  const routes = [
    {
      private:false,
      path: "/",
      component: MapView,
    },
    {
      private:false,
      path: "/auth/admin/login",
      component: LoginAdmin,
    },
    {
      private:true,
      path: "/auth/admin/dashboard",
      component: Dashboard,
    },
    {
      private:true,
      path: "/auth/admin/dashboard/usuarios",
      component: Usuarios,
    },
    {
      private:true,
      path: "/auth/admin/dashboard/usuarios/registro",
      component: RegistroUsuarios,
    },
    {
      private:true,
      path: "/auth/admin/dashboard/usuarios/mostrar",
      component: MostrarUsuarios,
    },
  ];
  return (
    <Switch>
      {routes.map((route, i) => (
        // <Route exact key={i} {...route} />
          route.private ? (
            <PrivateRoute exact key={i} 
            path={route.path} 
            component={route.component}/>
          ) : (<Route exact key={i} {...route} />)
        
        // 
      ))}
    </Switch>
  );
}

