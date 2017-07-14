import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/login';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export function userLogin(data){
    const request = axios.post(ROOT_URL,{
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
