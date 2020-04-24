import React,{useContext} from 'react';
import { Link } from "react-router-dom";

import UserContext from '../context/user-context'
import {history} from "../routers/AppRouter";

const Header = () =>  {

    const {userDispatch} = useContext(UserContext)

    const handleLogout = () => {
        userDispatch({type:'LOGOUT'})
        history.push('/');
    }

    const scrollAddTask = () => {
        document.getElementsByClassName('footer')[0].scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div>
            <div className='header'>
                <button className='header__button--logout button' onClick={handleLogout}>Logout</button>

                <div className="header__container">
                    <h1 > <Link className='header__title' to={'/dashboard'}> Task Manager App</Link></h1>
                    <div className='header__subtitle'> Manage your daily tasks in a click</div>

                </div>

                <button onClick={scrollAddTask} className='button__new-task'>Create a new Task</button>

            </div>

        </div>

    )
}

export {Header as default}