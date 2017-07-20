import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/newUser';

export const NEW_USER = 'NEW_USER';

export function createAccount(data){
    const request = axios.post(ROOT_URL,{
        userName: data.username,
        password: data.password
    })

    return (dispatch)=>{
        request.then((response)=>{
            dispatch({
                type:NEW_USER,
                payload:response
            })
        });
    };
}
