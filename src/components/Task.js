import React from 'react';

const Task = ({completed, description, _id, completeTask}) => {


    return (
        <div>
    <h2>{description}</h2>
    <div>Completed: {completed? 'yes' : 'no'}</div>
            <button onClick={()=>{ completeTask(_id) }}> Done </button>
    </div>
    )
}

export {Task as default};