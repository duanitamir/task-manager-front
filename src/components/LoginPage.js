import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { login } from '../actions/users'


const LoginPage = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [token, setToken] = useState(false);
    const [user, setUser] = useState('')


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
                setToken(data.token)
                setUser(data.user)
            return ({user,token})
        }).catch(e=> {
            console.log(e);})

        response.then((data) => {
            if(data.token){
                props.renderApp(data.user, data.token);
            }
        }).catch( e => {
            console.log(e);})
    }


    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" value={email } onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export {LoginPage as default};