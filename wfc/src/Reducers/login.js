import {FETCH_PROFILE} from '../Actions/userLogin';

export default function login(state=[],action){
    switch(action.type){
        case FETCH_PROFILE:
            return [...state,action.payload.data];
        default:
            return state;
    }
}