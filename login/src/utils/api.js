import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gcm-login.herokuapp.com'
});

export default api;