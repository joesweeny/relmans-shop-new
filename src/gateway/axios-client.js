import axios from 'axios';

console.log(import.meta.env.VITE_API_GATEWAY);

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY,
});

export default instance;
