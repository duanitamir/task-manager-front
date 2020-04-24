import React, {useState} from 'react';
import moment from 'moment';
const Task = ({completed, description, _id, completeTask, createdAt, removeTask}) => {

    const [complete, setCompleted ] = useState(completed)

    return (
        <div className={ complete? 'task-completed task-container': 'task-container'}>
            <div className='task-container__createdAt'>{moment(createdAt).format('MMM Do YY')}</div>
            <div className='task-container__description'>{description}</div>

                {completed?
                    <div className=' button-container--completed button-container'>
                        <button className='button' onClick={()=>{
                            setCompleted(!completed)
                            completeTask(_id, completed)}}> Do Again</button>
                        <button className='button' onClick={() => {
                            removeTask(_id)
                        }}>Remove Task</button>
                    </div>
                   : <div className='button-container'>
                        <button className='button' onClick={()=>{
                            setCompleted(!completed)
                            completeTask(_id, completed)}}> Done </button>
                    </div>}
        </div>
    )
}

export {Task as default};