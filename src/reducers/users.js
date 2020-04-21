




const userReducer = (state = {user:null, token:null}, action) => {
    switch (action.type){

        case 'LOGIN':
            return ({user:action.user, token:action.token})

        case 'LOGOUT':
            return ({});
    }

}

export {userReducer as default};