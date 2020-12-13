import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = (props) => {
    const condition = true;
    return  condition ? (
    <Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (
        <Redirect  to="/auth/admin/login"  />
        );
};
export  default  PrivateRoute;
