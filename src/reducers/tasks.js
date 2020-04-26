const taskReducerDefaultState = [];
import uid from 'uid';

const taskReducer = (state =taskReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_TASK':
           const data = fetch('https://task-manager-duani.herokuapp.com/tasks', {
                method: 'POST',
                headers:
                    {'cache-control': 'no-cache',
                        Authorization: `Bearer ${action.token}`,
                        'Postman-Token': '5813d003-9a93-4d8f-9fdc-cf6adbbb5d2f',
                        'Content-Type': 'application/json' },
                body: JSON.stringify({ description: action.task }),
                json: true })
               .then((response) =>  response.json())
                .then((json) => {
                    console.log(json)
                    return json
                })
                .catch(e=>{ console.log(e);})

            const task = {
                    completed: false,
                    description: action.task,
                    _id: uid()
                }

                data.then(res => {task._id =res._id})
            return([...state, task]);

        case 'REMOVE_TASK':
            const tasks = fetch(`https://task-manager-duani.herokuapp.com/tasks/${action.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${action.token}`,
                    'Postman-Token': 'dad7fd97-7fa6-44f0-91f3-44222de56e4f',
                    'cache-control': 'no-cache'}})
                .catch(e => e)
            return  action.tasks

        case 'COMPLETE_TASK':
            fetch(`https://task-manager-duani.herokuapp.com/tasks/${action.id}`, {
                method: 'PATCH',
                headers:
                    { 'Postman-Token': '20d45446-b56a-492c-b53e-420a79caac41',
                        Authorization: `Bearer ${action.token}`,
                        'cache-control': 'no-cache',
                        'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !action.completed }),
                json: true })
                .catch(e=> e)
            return state.map( (task) =>  (task._id === action.id) ?  ({...task, completed:!action.completed}) :  (task));

        case 'SET_TASKS':
            return action.tasks

        default:
            return state;
    }
}

export { taskReducer as default };