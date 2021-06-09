import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_URI ?? 'http://localhost:3333/'
});