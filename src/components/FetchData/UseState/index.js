import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idButtonClick, setIdButtonClick] = useState(id);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res)

                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
            .then(res => {
                console.log(res)

                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [idButtonClick]);

    return (
        <div>
            <input value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={() => setIdButtonClick(id)}>search</button>

            <h2>{post.title}</h2>

            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Posts
