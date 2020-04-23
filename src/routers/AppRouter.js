import React,{useContext} from 'react';
import { Router, Route, Switch } from "react-router-dom";

import AddTask from '../components/AddTask';
import Header from '../components/Header'
import LoginPage from "../components/LoginPage";
import {PublicRoute} from "./PublicRouter";
import {PrivateRoute} from "./PrivateRoute";
import TasksApp from '../components/TasksApp';
import UserContext from "../context/user-context";


export default ({history}) =>{

    const {user} = useContext(UserContext)

    return (
        <Router history={history}>
            <div>
                <Header />
            <Switch>
                <PublicRoute path={'/'} isAuth={!!user.token} component={LoginPage} exact/>
                <Route path={'/create'}  isAuth={!!user.token}  component={AddTask}/>
                <Route path={'/dashboard'}  isAuth={!!user.token}  component={TasksApp}/>
            </Switch>
            </div>
        </Router>
    )
}