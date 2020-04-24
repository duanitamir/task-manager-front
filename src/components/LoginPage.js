import React, {useState, useContext } from 'react';
import UserContext from "../context/user-context";
import {history} from '../routers/AppRouter'

const LoginPage = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const {user, userDispatch} = useContext(UserContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const response = fetch('https://task-manager-duani.herokuapp.com/users/login', {
            method: 'POST',
            headers:
                {
                    'cache-control': 'no-cache',
                    'Content-Type': 'application/json'},
            body:JSON.stringify(
                {
                    email: email,
                    password: pass }
            )}
        ).then( (res) => {
            return res.json()}).then((data)=>{
                userDispatch({type: 'LOGIN' ,user: (data.user) ,token: (data.token)})

            return ({user: data.user, token: data.token});
        }).catch(e=> {
            console.log(e);})

        response.then((data) => {
            if(data.token){
                history.push('/dashboard')
                return true;
            }
        }).catch( e => {
            console.log(e);})
    }

    const handleRegister = (e) => {
        history.push('/register');
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                <button>Login</button>
            </form>

            <button className='button'
                onClick={ handleRegister } >
                SIGN IN
            </button>

        </div>

    )
}

export {LoginPage as default};