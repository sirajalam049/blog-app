import axios from 'axios';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const DEL_POST = 'DEL_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const SINGLE_POST_RECEIVED = 'SINGLE_POST_RECEIVED';

export const getAllPosts = () => {
    return (
        dispatch => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    return (dispatch({ type: GET_ALL_POSTS, payload: res.data }))
                })
        }
    )
}

export const getSinglePost = (id) => {
    return (
        dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    return (dispatch({ type: SINGLE_POST_RECEIVED, payload: res.data }))
                })
        }
    )
}

