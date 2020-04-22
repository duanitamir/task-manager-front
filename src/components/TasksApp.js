import React, { Component, useEffect, useReducer,useState ,useContext} from "react";

import TasksReducer from '../reducers/tasks'
import Header from './Header'
import TasksList from './TasksList'
import TaskContext from '../context/tasks-context'
import UserContext from '../context/user-context'


let isFetched;

const TasksApp = () => {

    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const {tasks, tasksDispatch} = useContext(TaskContext);


    const fetchData = () =>{
        fetch('https://task-manager-duani.herokuapp.com/tasks',{
            method: 'GET',
            headers:
                {'cache-control': 'no-cache',
                    Authorization: `Bearer ${user.token}`}
        } )
            .then((data)=> {return data;})
            .then( step => step.json())
            .then( (tasks) => { tasksDispatch({type:'SET_TASKS', tasks}); return true})
            .then( () => {setLoading(true)})
            .catch( e => {console.log(e);})
    }

    useEffect( () => {
        fetchData()
    } , [])


        return(
            <div>
                {loading ?  <TasksList /> : <div>Loading...</div>}
            </div>
        )
}


export {TasksApp as default };