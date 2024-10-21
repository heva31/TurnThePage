// import React from 'react';
// import axios from 'axios';

// const AddToCartButton = ({ bookId }) => {
//     const handleAddToCart = async () => {
//         const token = localStorage.getItem('token');
        
//         if (!token) {
//             alert('Please log in to add books to your cart.');
//             return;
//         }

//         try {
//             await axios.post('http://127.0.0.1:8000/api/cart/add/', 
//                 { book_id: bookId, quantity: 1 }, 
//                 { headers: { Authorization: `Token ${token}` } }
//             );
//             alert('Book added to cart!');
//         } catch (error) {
//             console.error('Failed to add book to cart:', error);
//             alert('Failed to add book to cart. Please try again.');
//         }
//     };

//     return <button onClick={handleAddToCart}>Add to Cart</button>;
// };

// export default AddToCartButton;



import React from 'react';
import axios from 'axios';
import './AddToCartButton.css'; // Import the CSS file

const AddToCartButton = ({ bookId }) => {
    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert('Please log in to add books to your cart.');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/cart/add/', 
                { book_id: bookId, quantity: 1 }, 
                { headers: { Authorization: `Token ${token}` } }
            );
            alert('Book added to cart!');
        } catch (error) {
            console.error('Failed to add book to cart:', error);
            alert('Failed to add book to cart. Please try again.');
        }
    };

    return <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
