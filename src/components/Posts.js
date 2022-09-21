import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from 'data';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [postsList, setPosts] = useState();
  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then((response) => {
        setPosts(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error();
      })

  }, [])
  if (!postsList) return null;
  console.log(postsList)
  const { posts, id, title, body } = postsList;
  return (
    <div>
      {posts.map((data) => {
        console.log(data);
        return (<>
          <div className='posts'><div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          <Link to={`/posts/${data.id}`} className="learn">Learn more...</Link></div></div>
        </>

        )
      })
      }
    </div>
  );
}

export default Posts;