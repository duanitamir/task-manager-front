import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import UserReducer from "./reducers/users";
import UserContext from './context/user-context';
import AppRouter, {history} from "./routers/AppRouter";
import TasksReducer from "./reducers/tasks";
import TaskContext from "./context/tasks-context";
import './styles/styles.scss'
// require("babel-polyfill");


let isAuth = localStorage.getItem('token');

const renderApp = () => {
    if(!isAuth){
        isAuth = true;
        ReactDOM.render( <Index/> , document.getElementById('app'))
        history.push('/dashboard');
    }
}

const Index = () => {

    const [user, userDispatch] = useReducer(UserReducer, {});
    const [tasks, tasksDispatch] = useReducer(TasksReducer, []);

    useEffect( () => {
        if(JSON.parse(localStorage.getItem('user')) !== null ) {
            userDispatch({type:'SET_USER'})
            renderApp()
        }
    },[])

    useEffect( () => {
        if (user.token !== undefined){
                renderApp()
        }
    }, [user])


    return (
        <UserContext.Provider value={{user, userDispatch}}>
            <TaskContext.Provider value={{tasks, tasksDispatch}} >
                {!!isAuth ?
                    <AppRouter/> :
                    <LoginPage />}
            </TaskContext.Provider>
        </UserContext.Provider>)
}

ReactDOM.render( <Index />, document.getElementById('app'))







