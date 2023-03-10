import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY,
});

export default instance;
