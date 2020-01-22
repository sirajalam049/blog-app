import { GET_ALL_POSTS, SINGLE_POST_RECEIVED } from './actions';

export const BlogList = (state = { posts: 'FirstTime' }, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: return ({ ...state, posts: action.payload });
        case SINGLE_POST_RECEIVED: return ({ ...state, singlePost: action.payload });
        default:
            return state;
    }
}