import axios from 'axios';

const baseURL = 'http://localhost:3006/api';

const api = axios.create({
    baseURL,
});

export default api;
