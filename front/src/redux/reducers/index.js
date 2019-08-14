import { combineReducers } from 'redux'
import moviesReducer from './movies-reducer'
import userReducer from './user-reducer'

export default combineReducers({
    movies: moviesReducer,
    user: userReducer,
});