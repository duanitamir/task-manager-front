import React, {useContext, useState} from 'react';
import UserContext from "../context/user-context";
import { history } from '../routers/AppRouter'



const SignIn = () => {

    console.log('SignIn')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [pass, setPass] = useState('');

    const {user, userDispatch} = useContext(UserContext);


    const handleSignIn = () => {
        console.log('Sign in')
    }

    const handleLogin = (e) => {
        userDispatch({
            type: 'SIGN_IN',
            name,
            email,
            password: pass,
            age
        })
        history.push('/')
    }

    return (
        <div>
            <form onSubmit={handleSignIn}>
                <input type="text" onChange={ (e) => {setEmail(email + e.target.value )}}/>
                <input type="text" onChange={ (e) => {setPass(pass + e.target.value )}}/>
                <input type="text" onChange={ (e) => {setName(name + e.target.value )}}/>
                <input type="text" onChange={ (e) => {setAge( e.target.value )}}/>
            <button>Sign in</button>
            </form>

            <button
                className = 'button'
                onClick = {handleLogin} >
                LOG IN
            </button>

        </div>
    )
}

export {SignIn as default}