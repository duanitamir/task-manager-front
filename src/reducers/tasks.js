const taskReducerDefaultState = [];

const taskReducer = (state =taskReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('reducer')
            const task = fetch('https://task-manager-duani.herokuapp.com/tasks', {
                method: 'POST',
                headers:
                    { 'Postman-Token': '20d45446-b56a-492c-b53e-420a79caac41',
                        'cache-control': 'no-cache',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTllZTI5OTJlNjc5YjAwMTczNTY3N2YiLCJpYXQiOjE1ODc0NzEwMDF9.zBJA7fqCrN2TpVZsV3jBv40SebjaI0wm198lwkHfj8A',
                        'Content-Type': 'application/json' },
                body: { description: action.task },
                json: true }).then((response) => {
                return response.json();
            })
                .then((json) => {
                    console.log(json);
                    return json
                }).catch(e=>{
                    console.log(e);})
            console.log(task);


            return([...state, task]);

        case 'REMOVE_TASK':
            return state.filter( (task) => task.id !== action.id);

        case 'EDIT_TASK':
            return state.map( item => (item.id === action.id) ? ([...item, ...action.update]) : (item))

        case 'COMPLETE_TASK':

            fetch(`https://task-manager-duani.herokuapp.com/tasks/${action.id}`, {
                method: 'PATCH',
                headers:
                    { 'Postman-Token': '20d45446-b56a-492c-b53e-420a79caac41',
                        Authorization: `Bearer ${action.token}`,
                        'cache-control': 'no-cache',
                        'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !action.completed }),
                json: true }).then( (res) => {console.log(res)})
                .catch(e=>{console.log(e);})


            return state



        case 'SET_TASKS':
            return action.tasks

        default:
            return state;
    }
}

export { taskReducer as default };