import React, { useEffect, useState } from 'react';
import { fetchPosts } from './api';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data?.data);
    };

    getPosts();
  }, []);

  return (
    <div className='container'>
        <div className="header-nav">
      <h1 className='landing-page-heading'>Calyx Global - Strapi Blogs POC</h1>
      </div>
      <br/>
      <br/>
      <br/>
     <a target='_blank' rel="noreferrer" href='https://positive-sunshine-b406a96713.strapiapp.com/admin'><button class="button-64" ><span class="text">Click here to access the admin panel</span></button></a>
     {!posts?.length?<div className='loader-blog'>Loading posts, please wait</div>:
     <>
      <br/>
      <h1>Published Blogs</h1>
      <br/>
      <div className='blog-list'>
        {posts?.map((post) => (
             <Link to={`/blog/${post.id}`}>
          <div key={post.id} className='blog-post'>
            <img src={post.attributes?.Cover?.data?.attributes?.url} alt=''/>
            <p>{post.attributes?.Title}</p>
            <div className='card-footer'>
                <p>{new Date().toDateString()}</p>
            <Link to={`/blog/${post.id}`}>
            <button className='button-68'>Read the post</button>
            </Link>
            </div>
            </div>
            </Link>
        ))}
      </div></>}
    </div>
  );
};

export default BlogList;