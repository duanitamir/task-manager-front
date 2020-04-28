import React,{useContext, useState} from 'react';
import UserContext from '../context/user-context';
import TaskContext from '../context/tasks-context';


const TaskForm = () =>{

    const { user } = useContext(UserContext)
    const { tasksDispatch } = useContext(TaskContext);
    const [count, setCount ] = useState(0)
    const [error, setError] = useState('')

    const [description, setDescription] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(description.length > 5){
            tasksDispatch({
                type:'ADD_TASK',
                task: description,
                token: user.token
            })
            setError('');
            setDescription('');
        }
        else{
            setError('Unable to add the task. Task must have at lease 5 characters')
        }

        setCount(count +1)
    }


    return (
        <div>
            <div className='form__title'>Add a new Task</div>
            {error !== '' && <div className='form__error'>{error}</div>}
            <form onSubmit={handleOnSubmit}>
                <input
                    className='form__input--add_task form__input '
                    value ={description}
                    onChange={ e=> setDescription(e.target.value)}
                    type="text"/>

                <br/>
                <button className='button'>Add Task</button>
            </form>
        </div>)

}


export {TaskForm as default};