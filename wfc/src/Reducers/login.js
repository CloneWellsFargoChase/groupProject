import {USER_LOGIN} from '../Actions/userLogin';

export default function (state=[],action){
    switch(action.type){
        case USER_LOGIN:
        return [action.payload.data,...state]
    }
    return state;
}