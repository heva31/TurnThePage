// // // import React, { useState } from 'react';
// // // import { signup } from '../api/auth';

// // // const Signup = () => {
// // //     const [username, setUsername] = useState('');
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [message, setMessage] = useState('');

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             const response = await signup(username, email, password);
// // //             localStorage.setItem('user', JSON.stringify(response.data));
// // //             setMessage('Signup successful!');
// // //         } catch (error) {
// // //             setMessage('Error: ' + error.response.data.detail);
// // //         }
// // //     };

// // //     return (
// // //         <form onSubmit={handleSubmit}>
// // //             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
// // //             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// // //             <button type="submit">Sign Up</button>
// // //             <p>{message}</p>
// // //         </form>
// // //     );
// // // };

// // // export default Signup;



// // import React, { useState } from 'react';
// // import { register } from '../api/auth';

// // const Signup = () => {
// //     const [username, setUsername] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleSignup = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await register({ username, email, password });
// //             alert('Signup successful!');
// //         } catch (error) {
// //             console.error('Signup failed:', error);
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSignup}>
// //             <input
// //                 type="text"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 placeholder="Username"
// //                 required
// //             />
// //             <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Email"
// //                 required
// //             />
// //             <input
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Password"
// //                 required
// //             />
// //             <button type="submit">Signup</button>
// //         </form>
// //     );
// // };

// // export default Signup;








// // // Signup.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //     const [username, setUsername] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate(); // useNavigate hook

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setError('');  // Clear previous errors
// //         try {
// //             const response = await axios.post('http://127.0.0.1:8000/auth/signup/', { username, email, password });
// //             if (response.status === 201) {  // Check for successful status
// //                 localStorage.setItem('token', response.data.token);
// //                 navigate('/login'); // Redirect to login page using useNavigate
// //             } else {
// //                 setError('Signup failed. Please check your details.');
// //             }
// //         } catch (error) {
// //             setError(error.response?.data?.error || 'Signup failed. Please check your details.');
// //         }
// //     };

// //     return (
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 <h1>Signup Page</h1>
// //                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
// //                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //                 <button type="submit">Sign Up</button>
// //             </form>
// //             {error && <p>{error}</p>}
// //         </div>
// //     );
// // };

// // export default Signup;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Import your CSS

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/auth/signup/', { username, email, password });
//             if (response.status === 201) {
//                 localStorage.setItem('token', response.data.token);
//                 navigate('/login'); // Redirect to login page
//             } else {
//                 setError('Signup failed. Please check your details.');
//             }
//         } catch (error) {
//             setError(error.response?.data?.error || 'Signup failed. Please check your details.');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form className="auth-form" onSubmit={handleSubmit}>
//                 <h1>Signup</h1>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Sign Up</button>
//                 {error && <p className="error-message">{error}</p>} {/* Error message below the form */}
//             </form>
//         </div>
//     );
// };

// export default Signup;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Import your CSS

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         // Password validation
//         if (password !== confirmPassword) {
//             setError("Passwords do not match.");
//             return;
//         }

//         if (password.length < 8) {
//             setError("Password must be at least 8 characters long.");
//             return;
//         }

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/auth/signup/', { username, email, password });
//             if (response.status === 201) {
//                 localStorage.setItem('token', response.data.token);
//                 navigate('/login'); // Redirect to login page
//             } else {
//                 setError('Signup failed. Please check your details.');
//             }
//         } catch (error) {
//             setError(error.response?.data?.error || 'Signup failed. Please check your details.');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form className="auth-form" onSubmit={handleSubmit}>
//                 <h1>Signup</h1>
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     value={username} 
//                     onChange={(e) => setUsername(e.target.value)} 
//                 />
//                 <input 
//                     type="email" 
//                     placeholder="Email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm Password" 
//                     value={confirmPassword} 
//                     onChange={(e) => setConfirmPassword(e.target.value)} 
//                 />
//                 <button type="submit">Sign Up</button>
//                 {error && <p className="error-message">{error}</p>} {/* Error message below the form */}
//             </form>
//         </div>
//     );
// };

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your CSS

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Password validation
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        // Additional password validations
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        if (!hasUpperCase) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!hasLowerCase) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        if (!hasNumber) {
            setError("Password must contain at least one number.");
            return;
        }
        if (!hasSpecialChar) {
            setError("Password must contain at least one special character (e.g., !@#$%^&*).");
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/signup/', { username, email, password });
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/login'); // Redirect to login page
            } else {
                setError('Signup failed. Please check your details.');
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Signup failed. Please check your details.');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <button type="submit">Sign Up</button>
                {error && <p className="error-message">{error}</p>} {/* Error message below the form */}
            </form>
        </div>
    );
};

export default Signup;
