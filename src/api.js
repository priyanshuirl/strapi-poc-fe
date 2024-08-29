import axios from 'axios';

const api = axios.create({
  baseURL: 'https://positive-sunshine-b406a96713.strapiapp.com/api', 
  headers:{
    Authorization:`Bearer f071094e81abbd9380a63319f7688eea6153513fc4fdac4143e0b98d9e267e497f7cdce9da6fa299c1d8046e5f7bd921a65692ae9aa1516ec47826ef76aef665ef826931b7ed4eb549ef4ac5ec95df6d23b19c0afe4aa5ecb4c48ae1df5961718c3eb97957207c3d72a78b8c096282ef9a59b9ebfa7f24d5b7c62fb395ca0775`
  }
});

export const fetchPosts = async () => {
  const response = await api.get('/blog-posts?_sort=created_at:DESC&populate=*'); 
  return response.data;
};

export const fetchPostBySlug = async (slug) => {
  const response = await api.get(`/blog-posts/${slug}`);
  return response.data; 
};