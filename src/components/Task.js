import React from 'react';

const Task = ({completed, description, _id, completeTask}) => {


    return (
        <div className='task-container '>
            <div className='task-container__description'>{description}</div>
            <div className='task-container__completed'>Completed: {completed? 'yes' : 'no'}</div>
                   <div className='button-container'> <button className='button' onClick={()=>{ completeTask(_id, completed) }}> Done </button> </div>
        </div>
    )
}

export {Task as default};