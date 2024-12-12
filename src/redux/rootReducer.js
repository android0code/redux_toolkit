// write by "Amrik"
import {combineReducers} from 'redux';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
