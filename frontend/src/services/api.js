import axios from 'axios';

const api = axios.create({
    baseURL: 'https://arroche-api-node.vercel.app/',
})

export default api;