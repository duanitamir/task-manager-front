import React, { useEffect, useState ,useContext} from "react";
import TasksList from './TasksList'
import TaskContext from '../context/tasks-context'
import UserContext from '../context/user-context'

const TasksApp = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const { tasksDispatch } = useContext(TaskContext);
    const userData =  user.user;
    useEffect( () => {
        fetch('https://task-manager-duani.herokuapp.com/tasks',{
                method: 'GET',
                headers: {'cache-control': 'no-cache',
                        Authorization: `Bearer ${user.token}`}})
                .then((data)=> data)
                .then( step => step.json())
                .then( (tasks) => { tasksDispatch({type:'SET_TASKS', tasks}); return true})
                .then( () => {setLoading(true)})
                .catch( e => {console.log(e);})},
        [userData])

    return(
            <div>
                <div className="panel"> </div>
                {loading ?  <TasksList /> : <div> Loading... </div>}
            </div>
        )
}


export {TasksApp as default };