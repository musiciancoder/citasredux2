//En index siempre se juntan todos los reducers

import { combineReducers } from 'redux';
import citasReducer from './citasReducer';


export default combineReducers({
    citas: citasReducer, //aca se define el state

});