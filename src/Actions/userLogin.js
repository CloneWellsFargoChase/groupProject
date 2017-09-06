import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/login';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOG_OUT = 'LOG_OUT';

export function userLogin(data){
    const request = axios.post('/login',{
        userName: data.username,
        password: data.password
    })

    return (dispatch)=>{
        request.then((response)=>{
            dispatch({
                type:FETCH_PROFILE,
                payload:response
            })
        });
    };
}

export function loginSuccess(){
    return {
        type:LOGIN_SUCCESS,
    }
}


export function loginError(error){
    return {
        type:LOGIN_ERROR,
        payload:error
    }
}

export function logOut(){
     return {
        type:LOG_OUT,
    }
}