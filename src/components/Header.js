import React from 'react';
import { Link } from "react-router-dom";

const Header = () =>  (<div>
            <h1>Task Manager App</h1>
                <Link to={'/dashboard'}>Home </Link>
                <Link to={'/create'}>Create a new Task</Link>
        </div>
    )

export {Header as default}