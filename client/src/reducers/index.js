import { combineReducers } from 'redux';
import dataUser from './dataUser';

const rootReducer = combineReducers ({
  users : dataUser
})

export default rootReducer
