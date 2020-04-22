import React,{useContext, useState} from 'react';
import UserContext from '../context/user-context';
import TaskContext from '../context/tasks-context';


const TaskForm = (props) =>{

    const { user } = useContext(UserContext)
    const { tasks, tasksDispatch } = useContext(TaskContext);

    const [description, setDescription] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(description)
        console.log(tasksDispatch)

        tasksDispatch({
            type:'ADD_EXPENSE',
            task: description,
        })
    }


    return (<form onSubmit={handleOnSubmit}>
        <input value ={description} onChange={ e=> setDescription(e.target.value)} type="text"/>
        <button>Add Task</button>
    </form>)

}


export {TaskForm as default};