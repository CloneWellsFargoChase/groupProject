import {FETCH_PROFILE,LOGIN_SUCCESS,LOGIN_ERROR,LOG_OUT} from '../Actions/userLogin';

export default function login(state={
    isAuthenticated: false,
    profile:[],
    error: null
},action){
    switch(action.type){
        case FETCH_PROFILE:
            return {isAuthenticated:false,profile:action.payload.data,error:null};
        case LOGIN_SUCCESS:
             return {isAuthenticated:true,profile:action.payload.data,error:null};
        case LOGIN_ERROR:
            return {isAuthenticated:false,profile:[],error:true};
        case LOG_OUT:
            return {isAuthenticated:false,profile:[],error:false};
        default:
            return state;
    }
}