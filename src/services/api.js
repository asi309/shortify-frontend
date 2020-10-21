import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'https://shortify-asi309.herokuapp.com/'
});

export default api;