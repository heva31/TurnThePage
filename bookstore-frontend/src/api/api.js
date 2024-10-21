// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/cart/';

export const fetchCartItems = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};