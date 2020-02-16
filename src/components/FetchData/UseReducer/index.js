import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

import { success, error } from './actionCreator';
import reducer, { INITIAL_STATE } from './reducer';

function PostsUseReducer() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(({ data }) => {
                dispatch(success(data));
            })
            .catch(err => {
                dispatch(error(err.message));
            });
    }, []);

    return (
        <div>
            {state.loading ? 'loading...' : state.post.title}
            {state.error}
        </div>
    )
}

export default PostsUseReducer;
