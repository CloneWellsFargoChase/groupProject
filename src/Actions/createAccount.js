import axios from 'axios';

const ROOT_URL = 'http://chase-clone.herokuapp.com:80/newUser';

export const NEW_USER = 'NEW_USER';

export function createAccount(data){
  console.log('8cA', data);
    const request = axios.post(ROOT_URL,{
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
