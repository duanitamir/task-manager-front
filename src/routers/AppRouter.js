import React, {useContext} from 'react';
import { Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import LoginPage from "../components/LoginPage";
import {PublicRoute} from "./PublicRouter";
import {PrivateRoute} from "./PrivateRoute";
import TasksApp from '../components/TasksApp';
import UserContext from "../context/user-context";


export const history = createHistory();

export default () =>{

    const {user} = useContext(UserContext);

    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path={'/'} isAuthenticated={!!user.token} component={LoginPage} exact/>
                <PublicRoute path={'/register'} isAuthenticated={!!user.token} component={LoginPage} exact/>
                <PrivateRoute path={'/dashboard'} isAuthenticated={!!user.token} component={TasksApp} />
            </Switch>
        </Router>
    )
}