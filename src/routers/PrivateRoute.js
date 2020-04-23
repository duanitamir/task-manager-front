import React from 'react';
import { Route, Redirect } from 'react-router-dom'




export const PrivateRoute = ({ isAuth, component: Component, ...rest}) => {

    return (
        <Route {...rest} component={(props) =>  <div><Component {...props}/> </div>}/>
    )
};