// // // // import React, { createContext, useState } from 'react';

// // // // export const AuthContext = createContext();

// // // // export const AuthProvider = ({ children }) => {
// // // //     const [authTokens, setAuthTokens] = useState(() => 
// // // //         localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
// // // //     );

// // // //     const loginUser = async (username, password) => {
// // // //         const response = await axios.post('http://127.0.0.1:8000/api/login/', {
// // // //             username,
// // // //             password
// // // //         });

// // // //         if (response.status === 200) {
// // // //             setAuthTokens(response.data);
// // // //             localStorage.setItem('authTokens', JSON.stringify(response.data));
// // // //         } else {
// // // //             alert('Login failed');
// // // //         }
// // // //     };

// // // //     const registerUser = async (username, password) => {
// // // //         const response = await axios.post('http://127.0.0.1:8000/api/register/', {
// // // //             username,
// // // //             password
// // // //         });

// // // //         if (response.status === 201) {
// // // //             loginUser(username, password);
// // // //         } else {
// // // //             alert('Registration failed');
// // // //         }
// // // //     };

// // // //     const logoutUser = () => {
// // // //         setAuthTokens(null);
// // // //         localStorage.removeItem('authTokens');
// // // //     };

// // // //     return (
// // // //         <AuthContext.Provider value={{ authTokens, loginUser, registerUser, logoutUser }}>
// // // //             {children}
// // // //         </AuthContext.Provider>
// // // //     );
// // // // };




// // // // src/context/AuthContext.js

// // // import React, { createContext, useState } from 'react';
// // // import axios from 'axios';

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //     const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
// // //     const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).user : null);

// // //     const loginUser = async (username, password) => {
// // //         try {
// // //             const response = await axios.post('http://127.0.0.1:8000/api/login/', {
// // //                 username,
// // //                 password
// // //             });
// // //             setAuthTokens(response.data);
// // //             setUser(response.data.user);
// // //             localStorage.setItem('authTokens', JSON.stringify(response.data));
// // //         } catch (error) {
// // //             console.error('Login failed', error);
// // //         }
// // //     };

// // //     const logoutUser = () => {
// // //         setAuthTokens(null);
// // //         setUser(null);
// // //         localStorage.removeItem('authTokens');
// // //     };

// // //     const contextData = {
// // //         user,
// // //         loginUser,
// // //         logoutUser,
// // //         authTokens
// // //     };

// // //     return (
// // //         <AuthContext.Provider value={contextData}>
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // };

// // // export default AuthContext;






// // // src/context/AuthContext.js
// // import React, { createContext, useContext, useState } from 'react';
// // import axios from 'axios';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);

// //     const signup = async (credentials) => {
// //         await axios.post('http://localhost:8000/api/auth/signup/', credentials);
// //     };

// //     const login = async (credentials) => {
// //         const response = await axios.post('http://localhost:8000/api/auth/login/', credentials);
// //         setUser(response.data.user);
// //     };

// //     const logout = async () => {
// //         await axios.post('http://localhost:8000/api/auth/logout/');
// //         setUser(null);
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, signup, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => useContext(AuthContext);





// import React, { createContext, useState, useContext } from 'react';
// import { login as apiLogin, signup as apiSignup, logout as apiLogout } from '../api/auth';

// // Create context
// const AuthContext = createContext();

// // AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);

//   const login = async (credentials) => {
//     try {
//       const response = await apiLogin(credentials);
//       setAuth(response);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const signup = async (userDetails) => {
//     try {
//       const response = await apiSignup(userDetails);
//       setAuth(response);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await apiLogout();
//       setAuth(null);
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };




import React, { createContext, useContext } from 'react';
import { register } from '../api/auth';  // Ensure this import is correct

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const signupUser = async (userData) => {
        try {
            const response = await register(userData);  // Ensure this function is called correctly
            return response;
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ signupUser }}>
            {children}
        </AuthContext.Provider>
    );
};
