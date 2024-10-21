// // // import React from 'react';
// // // import { logout } from '../api/auth';
// // // import { useNavigate } from 'react-router-dom';

// // // const Logout = () => {
// // //     const navigate = useNavigate();

// // //     const handleLogout = async () => {
// // //         await logout();
// // //         localStorage.removeItem('user');
// // //         navigate('/login');
// // //     };

// // //     return (
// // //         <button onClick={handleLogout}>Logout</button>
// // //     );
// // // };

// // // export default Logout;



// // // Logout.js
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Logout = () => {
// //     const navigate = useNavigate();

// //     const handleLogout = async () => {
// //         const token = localStorage.getItem('token');
// //         try {
// //             await axios.post('http://127.0.0.1:8000/auth/logout/', {}, {
// //                 headers: { Authorization: `Token ${token}` }
// //             });
// //             localStorage.removeItem('token');
// //             navigate('/login'); // Redirect to login page after logout
// //         } catch (error) {
// //             console.error('Logout failed:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Logout</h1>
// //             <button onClick={handleLogout}>Log Out</button>
// //         </div>
// //     );
// // };

// // export default Logout;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Logout.css'; // Import your CSS

// const Logout = () => {
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             await axios.post('http://127.0.0.1:8000/auth/logout/', {}, {
//                 headers: { Authorization: `Token ${token}` }
//             });
//             localStorage.removeItem('token');
//             setMessage('We’re sad to see you go! You have been logged out successfully.'); // Friendly message
//             setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
//         } catch (error) {
//             console.error('Logout failed:', error);
//             setMessage('Oops! Something went wrong. Please try again.'); // Error message
//         }
//     };

//     return (
//         <div className="logout-container">
//             <h1>Logout</h1>
//             <button className="logout-button" onClick={handleLogout}>Log Out</button>
//             {message && <p className={message.includes('sad') ? 'success-message' : 'error-message'}>{message}</p>}
//         </div>
//     );
// };

// export default Logout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Logout.css';

const Logout = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://127.0.0.1:8000/auth/logout/', {}, {
                headers: { Authorization: `Token ${token}` }
            });
            localStorage.removeItem('token');
            setMessage('We’re sad to see you go! You have been logged out successfully.');
            
            // Trigger a storage event so other components know about the change
            window.dispatchEvent(new Event('storage'));

            // Redirect to login immediately
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            setMessage('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <div className="logout-container">
            <h1>Logout</h1>
            <button className="logout-button" onClick={handleLogout}>Log Out</button>
            {message && <p className={message.includes('sad') ? 'success-message' : 'error-message'}>{message}</p>}
        </div>
    );
};

export default Logout;
