import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import TasksApp from '../components/TasksApp';
import AddTask from '../components/AddTask';
import LoginPage from "../components/LoginPage";

export const history = createHistory();

export default () =>
    <Router history={history}>
        <div>
            <Switch>
                <Route path={'/'} component={LoginPage} exact={true}/>
                <Route path={'/dashboard'} component={TasksApp} exact={true}/>
                <Route path={'/create'} component={AddTask}/>
            </Switch>
        </div>
    </Router>


