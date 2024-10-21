// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/auth/';

// export const register = async (userData) => {
//     const response = await axios.post(`${API_URL}register/`, userData);
//     return response.data;
// };

// // export const login = async (userData) => {
// //     const response = await axios.post(`${API_URL}login/`, userData);
// //     return response.data;
// // };

// export const login = async ({ username, password }) => {
//     try {
//         const response = await axios.post(`${API_URL}login/`, { username, password });
//         console.log('Response data:', response.data); // Debug line
//         return response.data;
//     } catch (error) {
//         console.error('Login request failed:', error.response ? error.response.data : error.message);
//         throw error;
//     }
// };

// export const logout = async () => {
//     await axios.post(`${API_URL}logout/`);
// };



import axios from 'axios';
import Cookies from 'js-cookie';  // Importing js-cookie for easier CSRF token handling

// const API_URL = 'http://127.0.0.1:8000/auth/';
const API_URL = 'http://localhost:8000/auth/';

// Create an Axios instance with credentials and CSRF token handling
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,  // Ensures cookies like CSRF token are sent along with the request
});

// Intercept each request to include the CSRF token
axiosInstance.interceptors.request.use(config => {
    // Get the CSRF token from the cookies
    const csrfToken = Cookies.get('csrftoken');
    
    // If the CSRF token exists, add it to the request headers
    if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
    }
    
    return config;
}, error => {
    return Promise.reject(error);
});

// Register user function
export const register = async (userData) => {
    try {
        const response = await axiosInstance.post(`register/`, userData);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Login user function
export const login = async ({ username, password }) => {
    try {
        const response = await axiosInstance.post(`login/`, { username, password });
        console.log('Response data:', response.data);  // Debug line
        return response.data;
    } catch (error) {
        console.error('Login request failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Logout user function
export const logout = async () => {
    try {
        await axiosInstance.post(`logout/`);
    } catch (error) {
        console.error('Logout request failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};
