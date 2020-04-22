import React, {useEffect, useContext, useState, useReducer} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import UserReducer from "./reducers/users";
import UserContext from './context/user-context';
import AppRouter from "./routers/AppRouter";
import createHistory from "history/createBrowserHistory";
import TasksReducer from "./reducers/tasks";
import TaskContext from "./context/tasks-context";
require("babel-polyfill");


let isAuth = false;


export const history = createHistory();

const renderApp = () => {
    if(!isAuth){
        isAuth = true;
        ReactDOM.render( <App/> , document.getElementById('app'))
        history.push('/dashboard');
    }
}

const App = () => {

    const [user, userDispatch] = useReducer(UserReducer, {});
    const [tasks, tasksDispatch] = useReducer(TasksReducer, []);

    useEffect( () => {
        if (user.token !== undefined){
            renderApp()
        }
    }, [user])

    return (
        <UserContext.Provider value={{user, userDispatch}}>
            <TaskContext.Provider value={{tasks, tasksDispatch}} >
                {!isAuth ?<LoginPage renderApp={renderApp} /> : <AppRouter history={history}/>}
            </TaskContext.Provider>
        </UserContext.Provider>)
}

ReactDOM.render( <App />, document.getElementById('app'))







