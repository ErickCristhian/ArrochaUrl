import axios from 'axios';

const api = axios.create({
    baseURL: 'https://arrocha-url-backend.vercel.app/',
})

export default api;