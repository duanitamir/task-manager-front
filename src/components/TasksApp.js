import React, {useState, useEffect} from "react";
import { Provider, connect } from 'react-redux'
import Header from './Header'
import TasksList from './TasksList'
import createStore from '../store/configureStore'

const store = createStore();


class TasksApp extends React.Component{

    state = {
        user : this.props.user,
        token : this.props.token,
        tasks : [],
        isFetched: false
    }
    componentDidMount(){

            const data = fetch('https://task-manager-duani.herokuapp.com/tasks',{
                method: 'GET',
                headers:
                    {'cache-control': 'no-cache',
                        Authorization: `Bearer ${this.state.token}`}
            } ).then((data)=> {
                return data;}).then( step => step.json())
            .catch( e => {
                console.log(e);})

        data.then( tasks => {
            console.log(tasks);
            this.setState({tasks, isFetched:true})
        })
    }

render() {
        return (
            <Provider store={store}>
                <Header/>
                { this.state.isFetched ?
                    <TasksList tasks={this.state.tasks} /> :  <div>Loading...</div>
                }
            </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(TasksApp);