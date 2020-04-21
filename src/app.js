import React, {useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import TasksApp from "./components/TasksApp";
import UserReducer from "./reducers/users";
import UserContext from './context/user-context';

let isAuth = false;



const Wrapper = () => {
    const [user, userDispatch] = useReducer(UserReducer, {})


    return (
        <UserContext.Provider value={{user, userDispatch}}>
            {isAuth ?
            <TasksApp/> : <LoginPage renderApp={renderApp}/> }
        </UserContext.Provider>)
}

const renderApp = () => {
    if(!isAuth){
        ReactDOM.render( <Wrapper/> , document.getElementById('app'))
        isAuth = true;
    }
}

ReactDOM.render( <Wrapper/> , document.getElementById('app'))







