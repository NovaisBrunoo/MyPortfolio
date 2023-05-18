import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/users/Novaisbrunoo/',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});