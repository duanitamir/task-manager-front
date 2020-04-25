import React, { useContext, useState ,useEffect} from 'react';
import Task from './Task'
import TaskContext from '../context/tasks-context'
import UserContext from '../context/user-context'

const TaskList = (props) => {

    const { user } = useContext(UserContext);
    const { tasks } = useContext(TaskContext)
    const { tasksDispatch } = useContext(TaskContext);
    const [update, setState] = useState(0)
    const [refresh, setRefresh] = useState(0)

    const completeTask = (id, completed) => {
        let taskIndex = tasks.findIndex( task => task._id === id); // wanted task
        tasksDispatch({
            type:'COMPLETE_TASK',
            completed,
            id,
            token: user.token,
        });
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        setState(update+1)
    }

    const removeTask = (id) => {
        tasksDispatch({
            type:'REMOVE_TASK',
            token: user.token,
            id
        })
        setState(update+1)
        setState(update+1)
    }


    return (

        <div className=' task-list content-container'>
            {tasks.length > 0 ? tasks.map( task => <Task
                key={task._id}
                {...task}
                completeTask={completeTask}
                removeTask={removeTask}/>) : <div className='empty-task-list'> Add new tasks down </div>}
        </div>
    )
}

export {TaskList as default}