import React, {useContext, useState} from 'react';
import UserContext from "../context/user-context";
import { history } from '../routers/AppRouter'



const RegisterForm = ({email, setEmail, pass, setPass, name, setName, age, setAge, handleRegister, setLocation, error}) => {

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="register-form__container">
                <label>NAME</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setName( e.target.value )}}/>
                <label>EMAIL</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setEmail( e.target.value )}}/>
                <label>PASSWORD</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setPass( e.target.value )}}/>
                <label>AGE</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setAge( e.target.value )}}/>
                { error && <div className='form__error--login'> {error}</div> }
            </div>
                <div className="button-container__login">
                    <button  className='button' >REGISTER</button>
                    <button  className='button--secondary button'  onClick={()=> setLocation('login')}>LOGIN</button>
                </div>
            </form>
        </div>
    )
}

export {RegisterForm as default}