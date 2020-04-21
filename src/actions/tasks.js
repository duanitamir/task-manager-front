
export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id
})

export const editTask = (id ,update) => ({
    type: 'EDIT_TASK',
    id,
    update
});

export const completeTask = (id) => ({
    type: 'COMPLETE_TASK',
    id
})

