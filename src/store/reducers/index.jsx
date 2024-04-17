import { combineReducers } from 'redux';
import userReducer from './userReducer';
import secondUserReducer from './secondUserReducer';

const redusers = combineReducers({
  userInfo: userReducer,
  secondUserInfo: secondUserReducer,
});

export default redusers;
