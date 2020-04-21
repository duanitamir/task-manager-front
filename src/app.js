import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import {Provider} from 'react-redux';
import createStore from "./store/configureStore";
import TasksApp from "./components/TasksApp";

const store = createStore()
let hasRendered = false;
let user = null;
let token= null;


const renderApp = (userData, tokenData) => {
    user = userData;
    token = tokenData;

    if(!hasRendered){
        ReactDOM.render(
            <Provider store={store}>
            <TasksApp user={user} token={token}/>
            </Provider>
            , document.getElementById('app'))
        hasRendered = true;
    }
}



ReactDOM.render( <LoginPage renderApp={renderApp}/>, document.getElementById('app'))



