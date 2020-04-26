import React from 'react';


const LoginForm = ({handleLogin, email, setEmail, pass, setPass, setLocation, error}) =>{
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="login-form__container">
                <label>EMAIL</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setEmail( e.target.value )}}/>
                <label>PASSWORD</label>
                <input className='form__input--login' type="text" onChange={ (e) => {setPass( e.target.value )}}/>
                { error && <div className='form__error--login'> {error}</div> }
                </div>
                <div className='button-container__login'>
                    <button className='button'>LOGIN</button>
                    <button className='button--secondary button' onClick={()=> setLocation('register')}>REGISTER</button>
                </div>
            </form>
        </div>
    )
}


export {LoginForm as default};