// // // // // // import React, { useState } from 'react';
// // // // // // import { login } from '../api/auth';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // const Login = () => {
// // // // // //     const [username, setUsername] = useState('');
// // // // // //     const [password, setPassword] = useState('');
// // // // // //     const [message, setMessage] = useState('');
// // // // // //     const navigate = useNavigate();

// // // // // //     const handleSubmit = async (e) => {
// // // // // //         e.preventDefault();
// // // // // //         try {
// // // // // //             const response = await login(username, password);
// // // // // //             localStorage.setItem('user', JSON.stringify(response.data));
// // // // // //             navigate('/home');
// // // // // //         } catch (error) {
// // // // // //             setMessage('Error: ' + (error.response ? error.response.data.detail : error.message));
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <form onSubmit={handleSubmit}>
// // // // // //             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
// // // // // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// // // // // //             <button type="submit">Login</button>
// // // // // //             <p>{message}</p>
// // // // // //         </form>
// // // // // //     );
// // // // // // };

// // // // // // export default Login;



// // // // // import React, { useState } from 'react';
// // // // // import { login } from '../api/auth';

// // // // // const Login = () => {
// // // // //     const [username, setUsername] = useState('');
// // // // //     const [password, setPassword] = useState('');

// // // // //     const handleLogin = async (e) => {
// // // // //         e.preventDefault();
// // // // //         try {
// // // // //             await login({ username, password });
// // // // //             localStorage.setItem('isLoggedIn', 'true');
// // // // //             alert('Login successful!');
// // // // //         } catch (error) {
// // // // //             console.error('Login failed:', error);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <form onSubmit={handleLogin}>
// // // // //             <input
// // // // //                 type="text"
// // // // //                 value={username}
// // // // //                 onChange={(e) => setUsername(e.target.value)}
// // // // //                 placeholder="Username"
// // // // //                 required
// // // // //             />
// // // // //             <input
// // // // //                 type="password"
// // // // //                 value={password}
// // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // //                 placeholder="Password"
// // // // //                 required
// // // // //             />
// // // // //             <button type="submit">Login</button>
// // // // //         </form>
// // // // //     );
// // // // // };

// // // // // export default Login;





// // // // import React, { useState } from 'react';
// // // // import { login } from '../api/auth';

// // // // const Login = () => {
// // // //     const [username, setUsername] = useState('');
// // // //     const [password, setPassword] = useState('');

// // // //     // const handleLogin = async (e) => {
// // // //     //     e.preventDefault();
// // // //     //     try {
// // // //     //         const response = await login({ username, password });
// // // //     //         localStorage.setItem('isLoggedIn', 'true');
// // // //     //         localStorage.setItem('username', response.username); // Store username
// // // //     //         alert('Login successful!');
// // // //     //     } catch (error) {
// // // //     //         console.error('Login failed:', error);
// // // //     //     }
// // // //     // };
// // // //     // const handleLogin = async (e) => {
// // // //     //     e.preventDefault();
// // // //     //     try {
// // // //     //         const response = await login({ username, password });
// // // //     //         localStorage.setItem('user', JSON.stringify({ username })); // Store username
// // // //     //         localStorage.setItem('isLoggedIn', 'true');
// // // //     //         alert('Login successful!');
// // // //     //     } catch (error) {
// // // //     //         console.error('Login failed:', error);
// // // //     //     }
// // // //     // };
// // // //     // const handleLogin = async (e) => {
// // // //     //     e.preventDefault();
// // // //     //     try {
// // // //     //         const response = await login({ username, password });
// // // //     //         const token = response.token;  // Assuming your API returns a token on login
    
// // // //     //         // Store the token and username in localStorage
// // // //     //         localStorage.setItem('token', token);
// // // //     //         localStorage.setItem('user', JSON.stringify({ username }));
// // // //     //         localStorage.setItem('isLoggedIn', 'true');
    
// // // //     //         alert('Login successful!');
// // // //     //     } catch (error) {
// // // //     //         console.error('Login failed:', error);
// // // //     //     }
// // // //     // };
// // // //     const handleLogin = async (e) => {
// // // //         e.preventDefault();
// // // //         try {
// // // //             const response = await login({ username, password });
// // // //             const token = response.token;
    
// // // //             if (!token) {
// // // //                 throw new Error('Token is not returned from login API.');
// // // //             }
    
// // // //             localStorage.setItem('token', token);
// // // //             localStorage.setItem('user', JSON.stringify({ username }));
// // // //             localStorage.setItem('isLoggedIn', 'true');
    
// // // //             console.log('Token stored:', token); // Debug line
// // // //             alert('Login successful!');
// // // //         } catch (error) {
// // // //             console.error('Login failed:', error);
// // // //         }
// // // //     };
    

// // // //     return (
// // // //         <form onSubmit={handleLogin}>
// // // //             <input
// // // //                 type="text"
// // // //                 value={username}
// // // //                 onChange={(e) => setUsername(e.target.value)}
// // // //                 placeholder="Username"
// // // //                 required
// // // //             />
// // // //             <input
// // // //                 type="password"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //                 placeholder="Password"
// // // //                 required
// // // //             />
// // // //             <button type="submit">Login</button>
// // // //         </form>
// // // //     );
// // // // };

// // // // export default Login;







// // // // Login.js
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // const Login = () => {
// // //     const [username, setUsername] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [error, setError] = useState('');
// // //     const navigate = useNavigate(); // useNavigate hook

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         setError('');  // Clear previous errors
// // //         try {
// // //             const response = await axios.post('http://127.0.0.1:8000/auth/login/', { username, password });
// // //             if (response.status === 200) {  // Check for successful status
// // //                 localStorage.setItem('token', response.data.token);
// // //                 navigate('/'); // Redirect to home page or dashboard
// // //             } else {
// // //                 setError('Login failed. Please check your credentials.');
// // //             }
// // //         } catch (error) {
// // //             setError(error.response?.data?.error || 'Login failed. Please check your credentials.');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <form onSubmit={handleSubmit}>
// // //                 <h1>Login page</h1>
// // //                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
// // //                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // //                 <button type="submit">Log In</button>
// // //             </form>
// // //             {error && <p>{error}</p>}
// // //         </div>
// // //     );
// // // };

// // // export default Login;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Login.css'; // Assuming you'll style login and signup in this file

// // const Login = () => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate(); // useNavigate hook

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setError('');  // Clear previous errors
// //         try {
// //             const response = await axios.post('http://127.0.0.1:8000/auth/login/', { username, password });
// //             if (response.status === 200) {  // Check for successful status
// //                 localStorage.setItem('token', response.data.token);
// //                 navigate('/'); // Redirect to home page or dashboard
// //             } else {
// //                 setError('Login failed. Please check your credentials.');
// //             }
// //         } catch (error) {
// //             setError(error.response?.data?.error || 'Login failed. Please check your credentials.');
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             <form className="auth-form" onSubmit={handleSubmit}>
// //                 <h1>Login</h1>
// //                 <input 
// //                     type="text" 
// //                     placeholder="Username" 
// //                     value={username} 
// //                     onChange={(e) => setUsername(e.target.value)} 
// //                     required
// //                 />
// //                 <input 
// //                     type="password" 
// //                     placeholder="Password" 
// //                     value={password} 
// //                     onChange={(e) => setPassword(e.target.value)} 
// //                     required
// //                 />
// //                 <button type="submit">Log In</button>
// //             </form>
// //             {error && <p className="error-message">{error}</p>}
// //         </div>
// //     );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import your CSS

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/auth/login/', { username, password });
//             if (response.status === 200) {
//                 localStorage.setItem('token', response.data.token);
//                 navigate('/'); // Redirect to the home page after successful login
//             } else {
//                 setError('Invalid username or password');
//             }
//         } catch (error) {
//             setError('Invalid username or password');
//             console.error(error);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form className="auth-form" onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     value={username} 
//                     onChange={(e) => setUsername(e.target.value)} 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                 />
//                 <button type="submit">Login</button>
//                 {error && <p className="error-message">{error}</p>} {/* Error message below the form */}
//             </form>
//         </div>
//     );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/login/', { username, password });
            if (response.status === 200) {
                // Store token in localStorage
                localStorage.setItem('token', response.data.token);

                // Trigger a storage event to update the Navbar
                window.dispatchEvent(new Event('storage'));

                // Redirect to the home page after successful login
                navigate('/');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>} {/* Error message below the form */}
            </form>
        </div>
    );
};

export default Login;
