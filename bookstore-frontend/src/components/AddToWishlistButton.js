// // // AddToWishlistButton.js
// // import React from 'react';
// // import axios from 'axios';

// // const AddToWishlistButton = ({ bookId }) => {
// //     const handleAddToWishlist = async () => {
// //         const token = localStorage.getItem('token');
// //         try {
// //             await axios.post('http://127.0.0.1:8000/api/wishlist/', { book_id: bookId }, {
// //                 headers: { Authorization: `Token ${token}` }
// //             });
// //             alert('Book added to wishlist!');
// //         } catch (error) {
// //             console.error('Failed to add book to wishlist:', error);
// //         }
// //     };

// //     return (
// //         <button onClick={handleAddToWishlist}>Add to Wishlist</button>
// //     );
// // };

// // export default AddToWishlistButton;




// import React from 'react';
// import axios from 'axios';

// const AddToWishlistButton = ({ bookId }) => {
//     const handleAddToWishlist = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/wishlist/', 
//                 { book_id: bookId }, 
//                 { headers: { Authorization: `Token ${token}` } }
//             );
//             alert(response.data.message);
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 alert(error.response.data.message);
//             } else {
//                 console.error('Failed to add book to wishlist:', error);
//             }
//         }
//     };

//     return <button onClick={handleAddToWishlist}>Add to Wishlist</button>;
// };

// export default AddToWishlistButton;


import React from 'react';
import { addToWishlist } from '../pages/Wishlist/utils'; // Adjust the import path as necessary

const AddToWishlistButton = ({ bookId, onSuccess }) => {
    const handleAddToWishlist = async () => {
        try {
            await addToWishlist(bookId);
            alert('Book added to wishlist!');
            if (onSuccess) onSuccess(); // Optionally trigger a refresh or callback
        } catch (error) {
            alert(error.message); // Show error message if book is already in cart
        }
    };

    return (
        <button onClick={handleAddToWishlist}>
            Add to Wishlist
        </button>
    );
};

export default AddToWishlistButton;

