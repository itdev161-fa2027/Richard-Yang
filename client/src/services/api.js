import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token invalid or expired, clear it
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API calls
export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post('/users', { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Get Post
export const getPosts = async () => {
    try{
        const response = await api.get (`${API_URL}/posts`);
        return response.data;
    }
    catch(error){
        console.error('Error Fetching Posts:',error);
    }
};

//Get Post by ID
export const getPostById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

//Create Post
export const createPost = async (title, body) => {
  try{
    const response = await api.post('/posts', {title, body});
    return response.data;
  }catch(error){
    console.error('Error Creating Post:', error);
    throw error;
  }
};

//Update Post
export const updatePost = async (id, title, body) => {
  try{
    const response = await api.put(`/posts/${id}`, {title,body});
    return response.data;
  }catch(error){
    console.error(`Error Updating Post:`, error);
    throw error;
  }
};

//Delete Post
export const deletePost = async (id) => {
  try{
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  }catch(error){
    console.error('Error Deleting Post:', error);
    throw error;
  }
};


