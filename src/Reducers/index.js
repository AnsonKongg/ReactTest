import { combineReducers } from 'redux';
import counterReducer from './counter';
import loginReducer from './isLogged';

export default combineReducers({
    loginReducer,
    counterReducer,
});