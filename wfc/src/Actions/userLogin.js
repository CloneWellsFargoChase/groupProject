import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/login';

export const USER_LOGIN = 'USER_LOGIN';

export function userLogin(data){
    console.log(data.username);
    console.log(data.password);
    const url = ROOT_URL;
    const request = axios.post(url,{
        username:data.username,
        password:data.password
    }).then (function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    });
    return {
        type: USER_LOGIN,
        payload:request
    };
}
