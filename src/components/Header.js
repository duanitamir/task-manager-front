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


    return (<div className='header'>
            <h1 > <Link className='header__title' to={'/dashboard'}> Task Manager App</Link></h1>
            <div className='header__subtitle'> This is a div that explain what this app does </div>
                <Link className='header__title' to={'/create'}>Create a new Task</Link>
                <button className='button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export {Header as default}