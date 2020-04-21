const taskReducerDefaultState = [];

const taskReducer = (state =taskReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return([...state, action.task]);

        case 'REMOVE_TASK':
            return state.filter( (task) => task.id !== action.id);

        case 'EDIT_TASK':
            return state.map( item => (item.id === action.id) ? ([...item, ...action.update]) : (item))

        case 'COMPLETE_TASK':
            return state.map ( item => (item.id === action.id) ? (item.completed = true ) : item)

        case 'SET_TASKS':
            return action.tasks

        default:
            return state;
    }
}

export { taskReducer as default };