import {GET_ALL_POSTS} from './actions';

export const BlogList = (state = {posts:'FirstTime'}, action) => {
    switch(action.type){
        case GET_ALL_POSTS:
            return({...state, posts: action.payload})
        default:
            return state;
    }
}