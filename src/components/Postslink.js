import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import data from 'data';

const Postslink = () => {
    let { id } = useParams();
    let location = useLocation();

    const [postsLink, setPostslink] = useState();
    console.log(useParams());
    console.log('location', location)

    const apicall = () => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then((response) => setPostslink(response.data));
    };
    useEffect(() => {
        apicall();
    }, [])
    if (!postsLink) return null;

    return (
        <div className='posts'>
        
            <h2><b>{postsLink.title}</b></h2>
            <p> {postsLink.body}</p>
        </div>
    );
};

export default Postslink