import { combineReducers } from 'redux';
import login from './login';
import api from './api';

const rootReducer = combineReducers({ login, api });

export default rootReducer;
