const userReducer = (state = {user:null}, action) => {
    switch (action.type){

        case 'LOGIN':
            const userData = JSON.stringify(action.user )
            localStorage.setItem('user',userData);
            localStorage.setItem('token', action.token);
            return ({user:action.user, token:action.token})

        case 'SET_USER':
            const user = JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem('token')
            return ({ user, token })

        case 'LOGOUT':
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return ({});


        case 'REGISTER':
            fetch(`https://task-manager-duani.herokuapp.com/users`, {
                method: 'POST',
                headers:
                    { 'Postman-Token': '1ac860e2-7214-468c-821f-b9c3c8bd10ec',
                        'cache-control': 'no-cache',
                        'Content-Type': 'application/json' },
                body:
                    JSON.stringify({ name: action.name,
                        age : action.age,
                        email: action.email,
                        password: action.password })})
                .then( data => {console.log(data)})
                .catch( e => {console.log(e); return e})

        default:
                return state;
    }

}

export {userReducer as default};