import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../context/user-context'

export const PublicRoute = ({isAuth, component: Component, ...rest}) => {

    return(
        <Route { ...rest } component={ (props) => (isAuth?
                (<Redirect to='/dashboard'/>) : (<Component {...props}/>)
        )}/>
    );
}