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
        default:
                return state;
    }

}

export {userReducer as default};