import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/newUser';

export const NEW_USER = 'NEW_USER';

export function createAccount(data){
  console.log('8cA', data);
    const request = axios.post('/newUser',{
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
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
