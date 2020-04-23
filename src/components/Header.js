import React,{useContext} from 'react';
import { Link } from "react-router-dom";

import UserContext from '../context/user-context'
import {history} from "../app";

const Header = (props) =>  {

    const {userDispatch} = useContext(UserContext)

    const handleLogout = () => {
        console.log('clicked')
        userDispatch({type:'LOGOUT'})
        history.push('/');
    }


    return (<div className='header'>
            <h1 className='header__title'>Task Manager App</h1>
            <Link to={'/dashboard'}>Home </Link>
            <Link to={'/create'}>Create a new Task</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export {Header as default}