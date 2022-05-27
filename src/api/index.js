import axios from 'axios';
const API = axios.create({ baseURL: 'https://the-shoeroom.herokuapp.com' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

export const createPost = (newPost) => API.post('/post', newPost);
export const readPosts = () => API.get('/post');
export const updatePost = (id, updatedPost) => API.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);

