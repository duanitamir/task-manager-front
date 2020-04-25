const taskReducerDefaultState = [];

const taskReducer = (state =taskReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_TASK':
            const task = fetch('https://task-manager-duani.herokuapp.com/tasks', {
                method: 'POST',
                headers:
                    {'cache-control': 'no-cache',
                        Authorization: `Bearer ${action.token}`,
                        'Postman-Token': '5813d003-9a93-4d8f-9fdc-cf6adbbb5d2f',
                        'Content-Type': 'application/json' },
                body: JSON.stringify({ description: action.task }),
                json: true }).then((response) =>  response.json())
                .then((json) => json)
                .catch(e=>{ console.log(e);})

            return([...state, task]);

        case 'REMOVE_TASK':
            fetch(`https://task-manager-duani.herokuapp.com/tasks/${action.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${action.token}`,
                    'Postman-Token': 'dad7fd97-7fa6-44f0-91f3-44222de56e4f',
                    'cache-control': 'no-cache'}})
                .then( data => { console.log('deleted')})
                .then( res => state.filter( (task) => task.id !== action.id))
                .catch(e => e)
            return state.filter( (task) => task.id !== action.id)

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