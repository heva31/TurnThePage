// import axios from 'axios';

// // export const addToWishlist = async (bookId) => {
// //     const token = localStorage.getItem('token');
// //     try {
// //         const response = await axios.post('http://127.0.0.1:8000/api/wishlist/add/', { book_id: bookId }, {
// //             headers: { Authorization: `Token ${token}` },
// //         });
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error adding to wishlist:', error);
// //         throw error;
// //     }
// // };
// export const addToWishlist = async (bookId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post('http://127.0.0.1:8000/api/wishlist/', { book_id: bookId }, {
//             headers: { Authorization: `Token ${token}` },
//         });
//     } catch (error) {
//         console.error('Error adding to wishlist:', error);
//     }
// };
// export const getWishlistItems = async () => {
//     const token = localStorage.getItem('token');
//     try {
//         const response = await axios.get('http://127.0.0.1:8000/api/wishlist/', {
//             headers: { Authorization: `Token ${token}` },
//         });
//         return response.data.wishlist;
//     } catch (error) {
//         console.error('Error fetching wishlist items:', error);
//         throw error;
//     }
// };

// export const removeWishlistItem = async (bookId) => {
//     const token = localStorage.getItem('token');
//     try {
//         await axios.delete(`http://127.0.0.1:8000/api/wishlist/remove/${bookId}/`, {
//             headers: { Authorization: `Token ${token}` },
//         });
//     } catch (error) {
//         console.error('Error removing wishlist item:', error);
//     }
// };



// export const fetchBookDetails = async (book_id) => {
//     try {
//         // First check if the book exists in the Django backend
//         const response = await fetch(`/api/books/${book_id}/`);  // Replace with your Django book endpoint
//         if (response.ok) {
//             const bookDetails = await response.json();
//             return bookDetails;
//         } else {
//             // If not found in Django, fetch from Google Books API
//             const googleResponse = await fetch(`https://www.googleapis.com/books/v1/volumes/${book_id}`);
//             const googleBook = await googleResponse.json();
//             if (googleBook) {
//                 return {
//                     title: googleBook.volumeInfo.title,
//                     author: googleBook.volumeInfo.authors ? googleBook.volumeInfo.authors[0] : 'Unknown Author',
//                     price: googleBook.saleInfo?.retailPrice?.amount || 'N/A',
//                     imageLinks: googleBook.volumeInfo.imageLinks || {}
//                 };
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching book details:', error);
//         return null;
//     }
// };
import axios from 'axios';

// export const addToWishlist = async (bookId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post('http://127.0.0.1:8000/api/wishlist/add/', { book_id: bookId }, {
//             headers: { Authorization: `Token ${token}` },
//         });
//     } catch (error) {
//         console.error('Error adding to wishlist:', error.response.data);
//         throw error.response.data;
//     }
// };
export const addToWishlist = async (bookId) => {
    try {
        const token = localStorage.getItem('token');
        await axios.post('http://127.0.0.1:8000/api/wishlist/add/', { book_id: bookId }, {
            headers: { Authorization: `Token ${token}` },
        });
    } catch (error) {
        // Check if the error response indicates the book is already in the cart
        if (error.response && error.response.status === 400 && error.response.data.message === "Book already in cart") {
            throw new Error("This book is already in your cart!");
        } else {
            throw new Error("Error adding to wishlist: " + error.response.data);
        }
    }
};

export const getWishlistItems = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://127.0.0.1:8000/api/wishlist/', {
        headers: { Authorization: `Token ${token}` },
    });
    return response.data;
};

export const removeFromWishlist = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://127.0.0.1:8000/api/wishlist/remove/${id}/`, {
        headers: { Authorization: `Token ${token}` },
    });
};


export const fetchBookDetails = async (bookId) => {
    const token = localStorage.getItem('token');

    try {
        // First, try fetching from the Django backend
        const response = await axios.get(`http://127.0.0.1:8000/api/books/${bookId}/`, {
            headers: { Authorization: `Token ${token}` },
        });
        return response.data; // Return data if found in backend
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // If not found in backend, fetch from Google Books API
            const googleResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
            return googleResponse.data.volumeInfo; // Return data from Google API
        }
        throw error; // Rethrow if it's a different error
    }
};


