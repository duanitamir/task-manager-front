import React, {useState, useContext } from 'react';
import UserContext from "../context/user-context";
import {history} from '../routers/AppRouter'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginPage = (props) => {


    //  STATES FOR FORM

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [age, setAge] = useState(0);
    const [name, setName] = useState('')


    // STATES FOR RENDER

    const [location, setLocation] = useState('login')
    const [error, setError] = useState(false)

    const {user, userDispatch} = useContext(UserContext);


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
        const response = fetch('https://task-manager-duani.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                    'cache-control': 'no-cache',
                    'Content-Type': 'application/json'},
            body:JSON.stringify( { email, password} )})
            .then( (res) => { console.log(res)
            return res.json()}).then((data)=>{
                console.log(data)
                userDispatch({type: 'LOGIN' ,user: (data.user) ,token: (data.token)})
                setError(false)
            return ({user: data.user, token: data.token});
        }).catch(e=> {
            setError('Email or password are not correct')
            })


        response.then((data) => {
            if(data.token){
                history.push('/dashboard')
                return true;
            }
        }).catch( e => {
            console.log(e);})
    }

    const handleRegister =  (e) => {
        e.preventDefault();

        if(email === ''){
            setError('Unvalid email provided')
        }else if(password.length < 7){
            setError('Password must have at least 7 letters')
        }else if(name===''){
            setError('Unvalid name')
        }

        const userData = fetch( 'https://task-manager-duani.herokuapp.com/users', {
            method: 'POST',
            headers: {
                    'cache-control': 'no-cache',
                    'Content-Type': 'application/json' },
            body:  JSON.stringify({name, age, email, password})})
            .then( data => data)
            .then( data => {

                const response = fetch('https://task-manager-duani.herokuapp.com/users/login', {
                method: 'POST',
                headers: {
                    'cache-control': 'no-cache',
                    'Content-Type': 'application/json'},
                body:JSON.stringify({ email,  password }
                )}
        ).then( (res) => {
            return res.json()}).then((data)=>{
            userDispatch({type: 'LOGIN' ,user: (data.user) ,token: (data.token)})
            return ({user: data.user, token: data.token});
        }).catch(e=> {console.log(e);})

        response.then((data) => {
            if(data.token){
                setError('false')
                history.push('/dashboard')
                return true;
            }
        }).catch( e => {
            console.log(e);})

            })
            .catch(e => e)
    }



    return(
        <div className='box_layout'>

            {location === 'login' ?
                (<div className='box'>
                    <div className="box-title">LOGIN</div>
                    <div className='box-form'>
                    <LoginForm
                        handleLogin={handleLogin}
                        email={email}
                        pass={password}
                        setEmail={setEmail}
                        setPass={setPass}
                        setLocation={setLocation}
                    />

                    </div>
                </div>)
                    :
                (<div className='box--register box'>
                    <div className="box-title"> REGISTER</div>
                    <div className='box-form'>
                    <RegisterForm
                        email={email}
                        pass={password}
                        setEmail={setEmail}
                        setPass={setPass}
                        name={name}
                        setName={setName}
                        age={age}
                        setAge={setAge}
                        setLocation={setLocation}
                        error={error}
                        handleRegister={handleRegister}
                    /></div>
                </div>)
                }

        </div>


    )
}

export {LoginPage as default};