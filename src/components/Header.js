import React,{useContext} from 'react';
import { Link } from "react-router-dom";

import cloud from '../../public/images/icons/cloud.svg'
import idea from '../../public/images/icons/creativity.svg'
import actions from '../../public/images/icons/pencil.svg'
import team from '../../public/images/icons/team.svg'

import UserContext from '../context/user-context'
import {history} from "../routers/AppRouter";
import PanelItem from './PanelItem'


const Header = () =>  {

    const {userDispatch} = useContext(UserContext)

    const panelItems = [
        {image:cloud, text:`Use cloud base database \n to store your tasks and ideas`},
        {image:actions, text: 'Easily add, mark as done and remove tasks and idea from the board'},
        {image:team, text:'Work with a team and share ideas on the task board'}
    ]


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
            <div className="panel">
                {panelItems.map(item=><PanelItem image={item.image} text={item.text} />)}
            </div>

        </div>

    )
}

export {Header as default}