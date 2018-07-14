import {
    ADD_POST,
    FETCH_POST
} from './actions';

export const postReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_POST:
            return {...state, title: action.payload.title, body: action.payload.body};
            break;
        case FETCH_POST:
            return {...state}
            break;
        default:
            return state;
    }
}