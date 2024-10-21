import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/cart/'; // Update with your API URL

export const addToCart = async (bookId, quantity) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}add/`, { book_id: bookId, quantity }, {
        headers: { Authorization: `Token ${token}` },
    });
    return response.data;
};

export const getCartItems = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Token ${token}` },
    });
    return response.data;
};

// export const updateCartItem = async (itemId, quantity) => {
//     const token = localStorage.getItem('token');
//     const response = await axios.patch(`${API_URL}update/${itemId}/`, { quantity }, {
//         headers: { Authorization: `Token ${token}` },
//     });
//     return response.data;
// };

// export const updateCartItem = async (id, quantity) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.put(`http://127.0.0.1:8000/cart/update/${id}/`, { quantity }, {
//             headers: { Authorization: `Token ${token}` },
//         });
//     } catch (error) {
//         console.error('Error updating cart item:', error);
//     }
// };

export const updateCartItem = async (id, quantity) => {
    try {
        const token = localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/cart/update/${id}/`, { quantity }, {
            headers: { Authorization: `Token ${token}` },
        });
    } catch (error) {
        console.error('Error updating cart item:', error);
    }
};

export const removeCartItem = async (itemId) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}remove/${itemId}/`, {
        headers: { Authorization: `Token ${token}` },
    });
};


export const fetchBookDetails = async (book_id) => {
    try {
        // First check if the book exists in the Django backend
        const response = await fetch(`/api/books/${book_id}/`);  // Replace with your Django book endpoint
        if (response.ok) {
            const bookDetails = await response.json();
            return bookDetails;
        } else {
            // If not found in Django, fetch from Google Books API
            const googleResponse = await fetch(`https://www.googleapis.com/books/v1/volumes/${book_id}`);
            const googleBook = await googleResponse.json();
            if (googleBook) {
                return {
                    title: googleBook.volumeInfo.title,
                    author: googleBook.volumeInfo.authors ? googleBook.volumeInfo.authors[0] : 'Unknown Author',
                    price: googleBook.saleInfo?.retailPrice?.amount || 'N/A',
                    imageLinks: googleBook.volumeInfo.imageLinks || {}
                };
            }
        }
    } catch (error) {
        console.error('Error fetching book details:', error);
        return null;
    }
};



// utils.js
export const placeOrder = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/place-order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add auth if needed
            },
            body: JSON.stringify({ /* Add necessary order details */ }), // Include order details
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to place order');
        }

        return await response.json();
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};



export const clearCart = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/cart/clear/', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log('Cart cleared successfully!');
    } else {
        console.error('Failed to clear cart:', response.status);
    }
};

