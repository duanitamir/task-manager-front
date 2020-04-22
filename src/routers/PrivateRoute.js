import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../context/user-context'
import Header from "../components/Header";



export const PrivateRoute = ({ isAuth, component: Component, ...rest}) => {

    return (
        <Route {...rest} component={(props) => (isAuth ?
                (<div><Header/> <Component {...props}/></div>) : (<Redirect to='/'/>)
        )}/>
    )
};