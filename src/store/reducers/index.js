import { combineReducers } from 'redux';
import doctorInfoPage from './userReducer';
import doctorInfoPageReducer from './doctorInfoPageReducer';

const redusers = combineReducers({
  doctorList: doctorInfoPage,
  doctorInfoPage: doctorInfoPageReducer,
});

export default redusers;
