import React from 'react';


const LoginForm = ({handleLogin, email, setEmail, pass, setPass, setLocation}) =>{
    return (
        <form onSubmit={handleLogin}>
            <label>EMAIL</label>
            <input className='form__input--login' type="text" onChange={ (e) => {setEmail( e.target.value )}}/>
            <label>PASSWORD</label>
            <input className='form__input--login' type="text" onChange={ (e) => {setPass( e.target.value )}}/>

            <div className='button-container__login'>
                <button className='button'>LOGIN</button>
                <button className='button--secondary button' onClick={()=> setLocation('register')}>REGISTER</button>
            </div>

        </form>)
}


export {LoginForm as default};