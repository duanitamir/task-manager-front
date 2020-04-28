import React, {useState, useContext } from 'react';
import UserContext from "../context/user-context";
import {history} from '../routers/AppRouter'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
const validator = require('validator');


const LoginPage = (props) => {


    //  STATES FOR FORM

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [age, setAge] = useState(0);
    const [name, setName] = useState('')


    // STATES FOR RENDER

    const [location, setLocation] = useState('login')
    const [error, setError] = useState(false)

    const {userDispatch} = useContext(UserContext);


    const handleLogin = (e) => {
        e.preventDefault();

        if(email === '' || !(validator.isEmail(email))){
            setError('Non valid email provided, please try again')
        }
        else{
            setError(false)
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

    }

    const handleRegister =  (e) => {
        e.preventDefault();

        if(email === '' || !(validator.isEmail(email))){
            setError('Non valid email provided, please try again')
        }else if(password.length < 7){
            setError('Password must have at least 7 letters')
        }else if(name===''){
            setError('Unvalid name')
        }
        else if(password.toLowerCase().includes('password')){
            setError('Password can not contain the word "password"')
        }
        else if(age < 0){ setError('Age must be positive number ') }

        else{
            setError(false)
            fetch( 'https://task-manager-duani.herokuapp.com/users', {
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
                    }).catch(e=> {setError('There is already user with this email address')})

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
                        setError={setError}
                        setPass={setPass}
                        error={error}
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
                        setError={setError}
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