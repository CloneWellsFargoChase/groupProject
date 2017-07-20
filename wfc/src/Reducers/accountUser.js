import { NEW_USER } from '../Actions/createAccount';

export default function newUser(state=[],action){
    switch(action.type){
        case NEW_USER:
            return [action.payload.data];
        default:
            return state;
    }
}