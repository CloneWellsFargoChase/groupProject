import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/login';

export const USER_LOGIN = 'USER_LOGIN';

export function userLogin(data){
    console.log(data);
    const url = `${ROOT_URL}`;
    const request = axios.get(url);
    return {
        type: USER_LOGIN,
        payload:request
    };
}
