import React, { useEffect, useState } from 'react';
import { fetchPostBySlug, } from './api';
import { useParams } from 'react-router-dom';

const BlogPost = ({isPreview=false}) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);


  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPostBySlug(slug);
      setPost(data?.data);
    };
    getPost();
  }, [slug,]);


  return (<div className='container'>
        <div className="header-nav">
      <h1 className='landing-page-heading'>Calyx Global - Strapi Blogs POC</h1>
      {isPreview?<div className='preview-strip'>This is a preview, please save your changes in the admin panel and refresh your browser to see new content</div>:null}
      </div>
      {!post?<div className='loader'>Please wait</div>:
    <div style={{padding:'32px'}}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.attributes?.BlogPost }} />
    </div>}
  </div>

  );
};

export default BlogPost;