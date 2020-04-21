import React, { useContext} from 'react';
import Task from './Task'
import TaskContext from '../context/tasks-context'

const TaskList = () => {

    const { tasks }= useContext(TaskContext)

    console.log(tasks);

    const completeTask = (id) => {
        let taskIndex = tasks.findIndex( task => task._id === id); // wanted task
        tasks[taskIndex].completed = true;
        tasksDispatch(tasks);
    }


    return (
        <div>
            {tasks.map( task => <Task key={task._id} {...task} completeTask={completeTask}/>)}
        </div>
    )
}

export {TaskList as default}