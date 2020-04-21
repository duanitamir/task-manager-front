import  {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import taskReducer from '../reducers/tasks'
import userReducer from '../reducers/users'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose ;

export default () => {
    const store = createStore( combineReducers({
        tasks: taskReducer,
        // user: userReducer
    }), composeEnhancers(applyMiddleware(thunk)));
    return store;
}
