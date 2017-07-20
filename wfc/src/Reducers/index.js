import { combineReducers } from 'redux';
import login from './login';
import newUser from './accountUser'

const rootReducer = combineReducers({
   login, 
   newUser
  // add your other reducers here
})

export default rootReducer;