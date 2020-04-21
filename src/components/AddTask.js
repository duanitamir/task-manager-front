import React from 'react';
import TaskForm from './TaskForm'
import Header from './Header'


const AddTask = () =>
    <div>
        <Header />
        <h1>Add task page</h1>
        <TaskForm />
    </div>

export { AddTask as default }