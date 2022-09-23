import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import login from './reducer/login'
import home from './reducer/home'

const reducers = combineReducers({
    login,
    home
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;