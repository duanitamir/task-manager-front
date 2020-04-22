import React,{useContext} from 'react';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import TasksApp from '../components/TasksApp';
import AddTask from '../components/AddTask';
import LoginPage from "../components/LoginPage";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRouter";
import UserContext from "../context/user-context";
import TasksContext from "../context/tasks-context";
import Header from '../components/Header'


export default ({history}) =>{

    const {user} = useContext(UserContext)
    const {tasksDispatch} = useContext(TasksContext)

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