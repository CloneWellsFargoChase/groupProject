import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/newUser';

export const NEW_USER = 'NEW_USER';

export function createAccount(data){
    const request = axios.post(ROOT_URL,{
        fName: data.firstName,
        lName: data.lastName,
        userName: data.username,
        password: data.password,
        email: data.email
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
