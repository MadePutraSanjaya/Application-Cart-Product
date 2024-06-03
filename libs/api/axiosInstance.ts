import axios from 'axios';

// get api
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.escuelajs.co/api/v1/products',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;
