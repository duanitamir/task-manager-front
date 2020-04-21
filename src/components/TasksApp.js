import React, { useEffect, useReducer, useContext} from "react";

import TasksReducer from '../reducers/tasks'
import Header from './Header'
import TasksList from './TasksList'
import TaskContext from '../context/tasks-context'
import UserContext from '../context/user-context'

let isFetched = false;

const TasksApp = () => {
    const [ tasks, tasksDispatch ] = useReducer(TasksReducer, []);

    const {user} = useContext(UserContext)

    useEffect(()=>{
        const data = fetch('https://task-manager-duani.herokuapp.com/tasks',{
            method: 'GET',
            headers:
                {'cache-control': 'no-cache',
                    Authorization: `Bearer ${user.token}`}
        } ).then((data)=> {return data;})
            .then( step => step.json())
            .catch( e => {console.log(e);})

        data.then( tasks => { console.log(tasks);
            tasksDispatch({type:'SET_TASKS', tasks})
            isFetched = true;

        })
    },[])

        return(<TaskContext.Provider value = {{tasks, tasksDispatch}}>
                     <Header />
                {isFetched ? <TasksList/>: (<div>Loadin...</div>)}
             </TaskContext.Provider>
           )

}


export {TasksApp as default };