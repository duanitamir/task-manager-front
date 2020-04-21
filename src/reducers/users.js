




const userReducer = (state = {user:null}, action) => {
    switch (action.type){

        case 'LOGIN':
            return ({user:action.data, token:action.token})

        case 'LOGOUT':
            return ({});
        default:
                return state;
    }

}

export {userReducer as default};