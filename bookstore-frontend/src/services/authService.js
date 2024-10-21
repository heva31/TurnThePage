import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/'; // Base URL for Django backend

const signup = (username, email, password) => {
    return axios.post(API_URL + 'users/', {
        username,
        email,
        password,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).catch(error => {
        console.error("Signup error:", error.response ? error.response.data : error.message);
        throw error;  // Rethrow the error to handle it where the function is called
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'jwt/create/', {
        username,
        password,
    }).then(response => {
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }).catch(error => {
        console.error("Login error:", error.response ? error.response.data : error.message);
        throw error;  // Rethrow the error to handle it where the function is called
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    signup,
    login,
    logout,
};
