import React,{useContext, useState} from 'react';
import UserContext from '../context/user-context';
import TaskContext from '../context/tasks-context';


const TaskForm = (props) =>{

    const { user } = useContext(UserContext)
    const { tasks, tasksDispatch } = useContext(TaskContext);
    const [count, setCount ] = useState(0)

    const [description, setDescription] = useState('');

    const handleOnSubmit = () => {
        tasksDispatch({
            type:'ADD_TASK',
            task: description,
            token: user.token
        })
        setCount(count +1)
    }


    return (
        <div>
            <div className='form__title'>Add a new Task</div>
            <form onSubmit={handleOnSubmit}>
                <input
                    className='form__input'
                    value ={description}
                    onChange={ e=> setDescription(e.target.value)}
                    type="text"/>

                <br/>
                <button className='button'>Add Task</button>
            </form>
        </div>)

}


export {TaskForm as default};