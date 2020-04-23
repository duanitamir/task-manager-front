import React, { useContext} from 'react';
import Task from './Task'
import TaskContext from '../context/tasks-context'

const TaskList = ({tasksDispatch}) => {

    const { tasks } = useContext(TaskContext)

    const completeTask = (id) => {
        let taskIndex = tasks.findIndex( task => task._id === id); // wanted task
        tasks[taskIndex].completed = true;
        tasksDispatch({
            type:'SET_TASKS',
            tasks
        });
    }


    return (

        <div>
            {tasks.length > 0 ? tasks.map( task => <Task key={task._id} {...task} completeTask={completeTask}/>) : <div>No Tasks to render</div>}
        </div>
    )
}

export {TaskList as default}