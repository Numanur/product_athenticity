import axios from 'axios';

const REACT_APP_API_URL = 'https://blockchain-project-api.vercel.app/api';

export const publicRequest = axios.create({
    baseURL: REACT_APP_API_URL
});

