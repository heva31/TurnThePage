// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ProfilePage = () => {
// //     const [user, setUser] = useState(null);
// //     const [error, setError] = useState(null);
// //     const [loading, setLoading] = useState(true);

// //     const fetchUserProfile = async () => {
// //         const token = localStorage.getItem('token');
// //         try {
// //             const response = await axios.get('http://localhost:8000/api/profile/', {
// //                 headers: {
// //                     'Authorization': `Token ${token}`,
// //                 },
// //             });
// //             setUser(response.data);
// //         } catch (err) {
// //             setError('Failed to fetch user profile. Please log in.');
// //             console.error(err);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchUserProfile();
// //     }, []);

// //     if (loading) return <p>Loading...</p>;
// //     if (error) return <p>{error}</p>;

// //     return (
// //         <div>
// //             <h1>User Profile</h1>
// //             {user && (
// //                 <div>
// //                     <p>Name: {user.username}</p>
// //                     <p>Email: {user.email}</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ProfilePage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const fetchUserProfile = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             const response = await axios.get('http://localhost:8000/api/profile/', {
//                 headers: {
//                     'Authorization': `Token ${token}`,
//                 },
//             });
//             setUser(response.data);
//             setName(response.data.username);
//             setEmail(response.data.email);
//         } catch (err) {
//             setError('Failed to fetch user profile. Please log in.');
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const updateUserProfile = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         try {
//             const response = await axios.put('http://localhost:8000/api/profile/', {
//                 username: name,
//                 email: email,
//             }, {
//                 headers: {
//                     'Authorization': `Token ${token}`,
//                 },
//             });
//             setUser(response.data);
//             setSuccessMessage('Profile updated successfully!');
//         } catch (err) {
//             setError('Failed to update profile.');
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         fetchUserProfile();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h1>User Profile</h1>
//             {successMessage && <p>{successMessage}</p>}
//             {user && (
//                 <form onSubmit={updateUserProfile}>
//                     <div>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label>Email:</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit">Update Profile</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css'; // Ensure to create this CSS file

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:8000/api/profile/', {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            setUser(response.data);
            setName(response.data.username);
            setEmail(response.data.email);
        } catch (err) {
            setError('Failed to fetch user profile. Please log in.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put('http://localhost:8000/api/profile/', {
                username: name,
                email: email,
            }, {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            setUser(response.data);
            setSuccessMessage('Profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile.');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {user && (
                <div className="profile-card">
                    <form onSubmit={updateUserProfile} className="profile-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <button type="submit" className="update-button">Update Profile</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
