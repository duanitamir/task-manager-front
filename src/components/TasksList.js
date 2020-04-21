import React, {useState} from 'react';
import Task from './Task'


const TaskList = (props) => {

    console.log(props.tasks);

    const [tasks, setTasks] = useState(props.tasks);

    const completeTask = (id) => {
        let taskIndex = tasks.findIndex( task => task._id === id); // wanted task
        tasks[taskIndex].completed = true;
        setTasks(tasks);
        // console.log(tasks)
    }


    return (
        <div>
            {tasks.map( task => <Task key={task._id} {...task} completeTask={completeTask}/>)}
        </div>
    )
}

export {TaskList as default}