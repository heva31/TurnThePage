// // // // // // // // // // // // // // // // // // // CartPage.js
// // // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // // import { getCartItems, removeFromCart } from '../context/CartContext';
// // // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // // // //     const [book, setBook] = useState({});

// // // // // // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // // // // // //         const fetchBookDetails = async () => {
// // // // // // // // // // // // // // // // // //             try {
// // // // // // // // // // // // // // // // // //                 const response = await axios.get(`/api/books/${bookId}`); // Adjust API endpoint as needed
// // // // // // // // // // // // // // // // // //                 setBook(response.data);
// // // // // // // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // // // // // // //                 console.error('Error fetching book details:', error);
// // // // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // // // //         };
    
// // // // // // // // // // // // // // // // // //         fetchBookDetails();
// // // // // // // // // // // // // // // // // //     }, [bookId]);
    
// // // // // // // // // // // // // // // // // //     const handleRemove = async (itemId) => {
// // // // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // // // //             await removeFromCart(itemId);
// // // // // // // // // // // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // // // //             console.error('Error removing item:', error);
// // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // // //     if (loading) return <div>Loading...</div>;

// // // // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // // // //             <h2>Cart</h2>
// // // // // // // // // // // // // // // // // //             {cartItems.length === 0 ? (
// // // // // // // // // // // // // // // // // //                 <p>Your cart is empty.</p>
// // // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // // //                 <ul>
// // // // // // // // // // // // // // // // // //                     {cartItems.map(item => (
// // // // // // // // // // // // // // // // // //                         <li key={item.id}>
// // // // // // // // // // // // // // // // // //                             {item.name} - ${item.price}
// // // // // // // // // // // // // // // // // //                             <button onClick={() => handleRemove(item.id)}>Remove</button>
// // // // // // // // // // // // // // // // // //                         </li>
// // // // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default CartPage;



// // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // // //     const [error, setError] = useState(null);

// // // // // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // // // // // // //             try {
// // // // // // // // // // // // // // // // //                 const token = localStorage.getItem('token'); // Get token from localStorage
// // // // // // // // // // // // // // // // //                 const response = await axios.get('/api/cart/', {
// // // // // // // // // // // // // // // // //                     headers: {
// // // // // // // // // // // // // // // // //                         Authorization: `Bearer ${token}`, // Include token in the request headers
// // // // // // // // // // // // // // // // //                     },
// // // // // // // // // // // // // // // // //                 });
// // // // // // // // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // // // // // //                 console.error('Error fetching cart items:', error);
// // // // // // // // // // // // // // // // //                 setError('Failed to fetch cart items');
// // // // // // // // // // // // // // // // //             } finally {
// // // // // // // // // // // // // // // // //                 setLoading(false);
// // // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // // //         };

// // // // // // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // // // // // //     }, []);

// // // // // // // // // // // // // // // // //     if (loading) return <p>Loading...</p>;
// // // // // // // // // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // // // // // //             {cartItems.length === 0 ? (
// // // // // // // // // // // // // // // // //                 <p>Your cart is empty.</p>
// // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // //                 <ul>
// // // // // // // // // // // // // // // // //                     {cartItems.map(item => (
// // // // // // // // // // // // // // // // //                         <li key={item.id}>
// // // // // // // // // // // // // // // // //                             <h2>{item.title}</h2>
// // // // // // // // // // // // // // // // //                             <p>{item.author}</p>
// // // // // // // // // // // // // // // // //                             <p>Quantity: {item.quantity}</p>
// // // // // // // // // // // // // // // // //                             <p>Price: ${item.price}</p>
// // // // // // // // // // // // // // // // //                         </li>
// // // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default CartPage;

// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // //     const [error, setError] = useState(null);

// // // // // // // // // // // // // // // //     // useEffect(() => {
// // // // // // // // // // // // // // // //     //     const fetchCartItems = async () => {
// // // // // // // // // // // // // // // //     //         try {
// // // // // // // // // // // // // // // //     //             const token = localStorage.getItem('token'); // Retrieve the token from localStorage
// // // // // // // // // // // // // // // //     //             if (!token) {
// // // // // // // // // // // // // // // //     //                 throw new Error('No authentication token found.');
// // // // // // // // // // // // // // // //     //             }

// // // // // // // // // // // // // // // //     //             const response = await axios.get('/api/cart/', {
// // // // // // // // // // // // // // // //     //                 headers: {
// // // // // // // // // // // // // // // //     //                     Authorization: `Bearer ${token}`, // Ensure the token is included in the request headers
// // // // // // // // // // // // // // // //     //                 },
// // // // // // // // // // // // // // // //     //             });

// // // // // // // // // // // // // // // //     //             if (response.status === 200) {
// // // // // // // // // // // // // // // //     //                 setCartItems(response.data);
// // // // // // // // // // // // // // // //     //             } else {
// // // // // // // // // // // // // // // //     //                 throw new Error(`Error: ${response.status}`);
// // // // // // // // // // // // // // // //     //             }
// // // // // // // // // // // // // // // //     //         } catch (error) {
// // // // // // // // // // // // // // // //     //             console.error('Error fetching cart items:', error.message);
// // // // // // // // // // // // // // // //     //             setError('Failed to fetch cart items. Please check the console for more details.');
// // // // // // // // // // // // // // // //     //         } finally {
// // // // // // // // // // // // // // // //     //             setLoading(false);
// // // // // // // // // // // // // // // //     //         }
// // // // // // // // // // // // // // // //     //     };

// // // // // // // // // // // // // // // //     //     fetchCartItems();
// // // // // // // // // // // // // // // //     // }, []);
// // // // // // // // // // // // // // // //     const fetchCartItems = async () => {
// // // // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // //             const response = await axios.get('http://localhost:8000/api/cart/', {
// // // // // // // // // // // // // // // //                 headers: {
// // // // // // // // // // // // // // // //                     Authorization: `Token ${token}`  // Ensure the token is included in the header
// // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // // //             setCartItems(response.data);
// // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // //             console.error('Error fetching cart items:', error);
// // // // // // // // // // // // // // // //         } finally {
// // // // // // // // // // // // // // // //             setLoading(false);
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     };
    
    
// // // // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // // // // //     }, []);
    
// // // // // // // // // // // // // // // //     if (loading) return <p>Loading...</p>;
// // // // // // // // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // // // // //             {cartItems.length === 0 ? (
// // // // // // // // // // // // // // // //                 <p>Your cart is empty.</p>
// // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // //                 <ul>
// // // // // // // // // // // // // // // //                     {cartItems.map(item => (
// // // // // // // // // // // // // // // //                         <li key={item.id}>
// // // // // // // // // // // // // // // //                             <h2>{item.title}</h2>
// // // // // // // // // // // // // // // //                             <p>{item.author}</p>
// // // // // // // // // // // // // // // //                             <p>Quantity: {item.quantity}</p>
// // // // // // // // // // // // // // // //                             <p>Price: ${item.price}</p>
// // // // // // // // // // // // // // // //                         </li>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default CartPage;



// // // // // // // // // // // // // // // // // CartPage.js
// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // // //   const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     const fetchCartItems = async () => {
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const user = JSON.parse(localStorage.getItem('user'));
// // // // // // // // // // // // // // // //         if (!user || !user.token) {
// // // // // // // // // // // // // // // //           alert('Please log in to view your cart.');
// // // // // // // // // // // // // // // //           return;
// // // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // // //         const response = await axios.get('/api/cart/', {
// // // // // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // // // // //             'Authorization': `Token ${user.token}`
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //         });
// // // // // // // // // // // // // // // //         setCartItems(response.data);
// // // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // // //         setError('Error fetching cart items.');
// // // // // // // // // // // // // // // //         console.error(error);
// // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     fetchCartItems();
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   const handleRemoveFromCart = async (id) => {
// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       const user = JSON.parse(localStorage.getItem('user'));
// // // // // // // // // // // // // // // //       if (!user || !user.token) {
// // // // // // // // // // // // // // // //         alert('Please log in to remove items from your cart.');
// // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // //       }

// // // // // // // // // // // // // // // //       await axios.delete(`/api/cart/${id}/`, {
// // // // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // // // //           'Authorization': `Token ${user.token}`
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       });

// // // // // // // // // // // // // // // //       setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // // // // // // // // // //       alert('Item removed from cart.');
// // // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // // //       alert('Error removing item from cart.');
// // // // // // // // // // // // // // // //       console.error(error);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   if (loading) return <p>Loading...</p>;
// // // // // // // // // // // // // // // //   if (error) return <p>{error}</p>;

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // //       <h1>Your Cart</h1>
// // // // // // // // // // // // // // // //       {cartItems.length === 0 ? (
// // // // // // // // // // // // // // // //         <p>Your cart is empty.</p>
// // // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // // //         <ul>
// // // // // // // // // // // // // // // //           {cartItems.map(item => (
// // // // // // // // // // // // // // // //             <li key={item.id}>
// // // // // // // // // // // // // // // //               {item.book.title} - {item.quantity}
// // // // // // // // // // // // // // // //               <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default CartPage;




// // // // // // // // // // // // // // // // // Cart.js
// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // // //     const [error, setError] = useState('');
// // // // // // // // // // // // // // // //     const navigate = useNavigate();

// // // // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // // // // // // //             try {
// // // // // // // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // // //                 });
// // // // // // // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // // // // //                 setError('Failed to fetch cart items');
// // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // //         };

// // // // // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // // // // //     }, []);

// // // // // // // // // // // // // // // //     const handleRemove = async (itemId) => {
// // // // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // //             setError('Failed to remove item from cart');
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // // // // //             {error && <p>{error}</p>}
// // // // // // // // // // // // // // // //             <ul>
// // // // // // // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // // // // // // //                     <li key={item.id}>
// // // // // // // // // // // // // // // //                         {item.book.title} - {item.quantity}
// // // // // // // // // // // // // // // //                         <button onClick={() => handleRemove(item.id)}>Remove</button>
// // // // // // // // // // // // // // // //                     </li>
// // // // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default CartPage;




// // // // // // // // // // // // // // import '../styles/CartPage.css';// Cart.js
// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // //     const [error, setError] = useState('');
// // // // // // // // // // // // // //     const navigate = useNavigate();

// // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // // // // //             try {
// // // // // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // //                 });
// // // // // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // // //                 setError('Failed to fetch cart items');
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //         };

// // // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // // //     }, []);

// // // // // // // // // // // // // //     const handleRemove = async (itemId) => {
// // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // //             });
// // // // // // // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // //             setError('Failed to remove item from cart');
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const handleQuantityChange = async (itemId, newQuantity) => {
// // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //             await axios.patch(`http://127.0.0.1:8000/api/cart/${itemId}/`, { quantity: newQuantity }, {
// // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // //             });
// // // // // // // // // // // // // //             setCartItems(cartItems.map(item => 
// // // // // // // // // // // // // //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // // // // // // //             ));
// // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // //             setError('Failed to update item quantity');
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const getTotalPrice = () => {
// // // // // // // // // // // // // //         return cartItems.reduce((total, item) => {
// // // // // // // // // // // // // //             const price = parseFloat(item.book.price);
// // // // // // // // // // // // // //             return total + (price * item.quantity);
// // // // // // // // // // // // // //         }, 0).toFixed(2);
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //         <div className="cart-page">
// // // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // // //             {error && <p className="error">{error}</p>}
// // // // // // // // // // // // // //             <ul className="cart-items">
// // // // // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // // // // //                     <li key={item.id} className="cart-item">
// // // // // // // // // // // // // //                         <img src={item.book.cover_image_url} alt={item.book.title} className="cover-image" />
// // // // // // // // // // // // // //                         <div className="item-details">
// // // // // // // // // // // // // //                             <span className="book-title">{item.book.title}</span>
// // // // // // // // // // // // // //                             <span className="book-price">${parseFloat(item.book.price).toFixed(2)}</span>
// // // // // // // // // // // // // //                             <div className="quantity-controls">
// // // // // // // // // // // // // //                                 <button 
// // // // // // // // // // // // // //                                     onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
// // // // // // // // // // // // // //                                     disabled={item.quantity <= 1}
// // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // //                                     -
// // // // // // // // // // // // // //                                 </button>
// // // // // // // // // // // // // //                                 <span className="quantity">{item.quantity}</span>
// // // // // // // // // // // // // //                                 <button 
// // // // // // // // // // // // // //                                     onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
// // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // //                                     +
// // // // // // // // // // // // // //                                 </button>
// // // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // // //                             <button 
// // // // // // // // // // // // // //                                 className="remove-btn"
// // // // // // // // // // // // // //                                 onClick={() => handleRemove(item.id)}
// // // // // // // // // // // // // //                             >
// // // // // // // // // // // // // //                                 Remove
// // // // // // // // // // // // // //                             </button>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                     </li>
// // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // // //             <div className="total-price">
// // // // // // // // // // // // // //                 <h2>Total: ${getTotalPrice()}</h2>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default CartPage;
// // // // // // // // // // // // // // // // CartPage.js
// // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // // // // // import '../styles/CartPage.css'; // Import CSS file for styling

// // // // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // // // //     const [error, setError] = useState('');
// // // // // // // // // // // // // // //     const navigate = useNavigate();

// // // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // // // // // //             try {
// // // // // // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // //                 });
// // // // // // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // // // //                 setError('Failed to fetch cart items');
// // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // //         };

// // // // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // // // //     }, []);

// // // // // // // // // // // // // // //     const handleRemove = async (itemId) => {
// // // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //             setError('Failed to remove item from cart');
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const handleQuantityChange = async (itemId, newQuantity) => {
// // // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //             await axios.patch(`http://127.0.0.1:8000/api/cart/${itemId}/`, { quantity: newQuantity }, {
// // // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // //             setCartItems(cartItems.map(item => 
// // // // // // // // // // // // // // //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // // // // // // // //             ));
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //             setError('Failed to update item quantity');
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const getTotalPrice = () => {
// // // // // // // // // // // // // // //         return cartItems.reduce((total, item) => {
// // // // // // // // // // // // // // //             const price = parseFloat(item.book.price);
// // // // // // // // // // // // // // //             return total + (price * item.quantity);
// // // // // // // // // // // // // // //         }, 0).toFixed(2);
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const handlePurchase = async () => {
// // // // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //             await axios.post('http://127.0.0.1:8000/api/checkout/', {}, {
// // // // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // //             alert('Purchase successful!');
// // // // // // // // // // // // // // //             setCartItems([]); // Clear cart after purchase
// // // // // // // // // // // // // // //             // Optionally navigate to a confirmation page
// // // // // // // // // // // // // // //             // navigate('/confirmation');
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //             setError('Failed to complete purchase');
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //         <div className="cart-page">
// // // // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // // // //             {error && <p className="error">{error}</p>}
// // // // // // // // // // // // // // //             <ul className="cart-items">
// // // // // // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // // // // // //                     <li key={item.id} className="cart-item">
// // // // // // // // // // // // // // //                         <img src={item.book.cover_image_url} alt={item.book.title} className="cover-image" />
                        
// // // // // // // // // // // // // // //                         <div className="item-details">
// // // // // // // // // // // // // // //                             <span className="book-title">{item.book.title}</span>
// // // // // // // // // // // // // // //                             <span className="book-price">${parseFloat(item.book.price).toFixed(2)}</span>
// // // // // // // // // // // // // // //                             <div className="quantity-controls">
// // // // // // // // // // // // // // //                                 <button 
// // // // // // // // // // // // // // //                                     onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
// // // // // // // // // // // // // // //                                     disabled={item.quantity <= 1}
// // // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // // //                                     -
// // // // // // // // // // // // // // //                                 </button>
// // // // // // // // // // // // // // //                                 <span className="quantity">{item.quantity}</span>
// // // // // // // // // // // // // // //                                 <button 
// // // // // // // // // // // // // // //                                     onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
// // // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // // //                                     +
// // // // // // // // // // // // // // //                                 </button>
// // // // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // // // //                             <button 
// // // // // // // // // // // // // // //                                 className="remove-btn"
// // // // // // // // // // // // // // //                                 onClick={() => handleRemove(item.id)}
// // // // // // // // // // // // // // //                             >
// // // // // // // // // // // // // // //                                 Remove
// // // // // // // // // // // // // // //                             </button>
// // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // //                     </li>
// // // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // // // //             <div className="total-price">
// // // // // // // // // // // // // // //                 <h2>Total: ${getTotalPrice()}</h2>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <button className="purchase-btn" onClick={handlePurchase}>
// // // // // // // // // // // // // // //                 Purchase
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default CartPage;






// // // // // // // // // // // // // // CartPage.js
// // // // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // // // //             try {
// // // // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // //                 });
// // // // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // // // //             } catch (error) {
// // // // // // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // // // // // //                 console.error(error);
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //         };
        
// // // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // // //     }, []);

// // // // // // // // // // // // //     const handleUpdateQuantity = async (itemId, quantity) => {
// // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // //         try {
// // // // // // // // // // // // //             await axios.put(`http://127.0.0.1:8000/api/cart/${itemId}/`, { quantity }, {
// // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // //             });
// // // // // // // // // // // // //             setCartItems(cartItems.map(item => item.id === itemId ? { ...item, quantity } : item));
// // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // //             console.error('Failed to update quantity:', error);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     const handleRemoveItem = async (itemId) => {
// // // // // // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // // // // // //         try {
// // // // // // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // // //             });
// // // // // // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // //             console.error('Failed to remove item:', error);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // // //             {error && <p>{error}</p>}
// // // // // // // // // // // // //             {cartItems.length === 0 ? (
// // // // // // // // // // // // //                 <p>Your cart is empty.</p>
// // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // //                 <ul>
// // // // // // // // // // // // //                     {cartItems.map(item => (
// // // // // // // // // // // // //                         <li key={item.id}>
// // // // // // // // // // // // //                             <span>Book ID: {item.book_id}</span>
// // // // // // // // // // // // //                             <input
// // // // // // // // // // // // //                                 type="number"
// // // // // // // // // // // // //                                 value={item.quantity}
// // // // // // // // // // // // //                                 min="1"
// // // // // // // // // // // // //                                 onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
// // // // // // // // // // // // //                             />
// // // // // // // // // // // // //                             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // // // // // // // // // // // //                         </li>
// // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default CartPage;




// // // // // // // // // // // // // CartPage.js
// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // import CartItem from '../components/CartItem'; // Import your CartItem component

// // // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // // //             try {
// // // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // // //                 });
// // // // // // // // // // // //                 setCartItems(response.data); // Set cart items from the API response
// // // // // // // // // // // //             } catch (err) {
// // // // // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // // // // //             } finally {
// // // // // // // // // // // //                 setLoading(false);
// // // // // // // // // // // //             }
// // // // // // // // // // // //         };

// // // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // // //     }, []);

// // // // // // // // // // // //     const handleRemoveItem = (itemId) => {
// // // // // // // // // // // //         // Function to remove an item from the cart (implement your logic here)
// // // // // // // // // // // //         setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // // //     };

// // // // // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // // //             <ul>
// // // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // // //                     <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
// // // // // // // // // // // //                 ))}
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //     );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default CartPage;
// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import CartItem from '../components/CartItem'; // Import your CartItem component

// // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // //             try {
// // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // //                 });
// // // // // // // // // // //                 setCartItems(response.data); // Set cart items from the API response
// // // // // // // // // // //             } catch (err) {
// // // // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // // // //             } finally {
// // // // // // // // // // //                 setLoading(false);
// // // // // // // // // // //             }
// // // // // // // // // // //         };

// // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // //     }, []);

// // // // // // // // // // //     const handleRemoveItem = (itemId) => {
// // // // // // // // // // //         // Function to remove an item from the cart (implement your logic here)
// // // // // // // // // // //         setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // //     };

// // // // // // // // // // //     const handleUpdateQuantity = (itemId, newQuantity) => {
// // // // // // // // // // //         setCartItems(cartItems.map(item =>
// // // // // // // // // // //             item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // // // //         ));
// // // // // // // // // // //     };

// // // // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // // //     return (
// // // // // // // // // // //         <div>
// // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // //             <ul>
// // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // //                     <CartItem
// // // // // // // // // // //                         key={item.id}
// // // // // // // // // // //                         item={item}
// // // // // // // // // // //                         onRemove={handleRemoveItem}
// // // // // // // // // // //                         onUpdateQuantity={handleUpdateQuantity} // Pass the update quantity handler
// // // // // // // // // // //                     />
// // // // // // // // // // //                 ))}
// // // // // // // // // // //             </ul>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );
// // // // // // // // // // // };

// // // // // // // // // // // export default CartPage;




// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import CartItem from '../components/CartItem';

// // // // // // // // // // // const CartPage = () => {
// // // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // // //             try {
// // // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // // //                 });
// // // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // // //             } catch (err) {
// // // // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // // // //             } finally {
// // // // // // // // // // //                 setLoading(false);
// // // // // // // // // // //             }
// // // // // // // // // // //         };

// // // // // // // // // // //         fetchCartItems();
// // // // // // // // // // //     }, []);

// // // // // // // // // // //     const handleRemoveItem = (itemId) => {
// // // // // // // // // // //         setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // // //     };

// // // // // // // // // // //     const handleUpdateQuantity = (itemId, newQuantity) => {
// // // // // // // // // // //         setCartItems(cartItems.map(item => 
// // // // // // // // // // //             item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // // // //         ));
// // // // // // // // // // //     };

// // // // // // // // // // //     const totalAmount = cartItems.reduce((total, item) => {
// // // // // // // // // // //         return total + (item.price * item.quantity || 0);
// // // // // // // // // // //     }, 0);

// // // // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // // //     return (
// // // // // // // // // // //         <div>
// // // // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // // // //             <ul>
// // // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // // //                     <CartItem 
// // // // // // // // // // //                         key={item.id} 
// // // // // // // // // // //                         item={item} 
// // // // // // // // // // //                         quantity={item.quantity} 
// // // // // // // // // // //                         onRemove={handleRemoveItem} 
// // // // // // // // // // //                         onUpdateQuantity={handleUpdateQuantity} 
// // // // // // // // // // //                     />
// // // // // // // // // // //                 ))}
// // // // // // // // // // //             </ul>
// // // // // // // // // // //             <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );
// // // // // // // // // // // };

// // // // // // // // // // // export default CartPage;



// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import CartItem from '../components/CartItem';
// // // // // // // // // // import '../styles/CartPage.css'; // Import the CSS file

// // // // // // // // // // const CartPage = () => {
// // // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // // //             try {
// // // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // // //                 });
// // // // // // // // // //                 setCartItems(response.data);
// // // // // // // // // //             } catch (err) {
// // // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // // //             } finally {
// // // // // // // // // //                 setLoading(false);
// // // // // // // // // //             }
// // // // // // // // // //         };

// // // // // // // // // //         fetchCartItems();
// // // // // // // // // //     }, []);

// // // // // // // // // //     const handleRemoveItem = (itemId) => {
// // // // // // // // // //         setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // // //     };

// // // // // // // // // //     const handleUpdateQuantity = (itemId, newQuantity) => {
// // // // // // // // // //         setCartItems(cartItems.map(item => 
// // // // // // // // // //             item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // // //         ));
// // // // // // // // // //     };

// // // // // // // // // //     const totalAmount = cartItems.reduce((total, item) => {
// // // // // // // // // //         return total + (item.price * item.quantity || 0);
// // // // // // // // // //     }, 0);

// // // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // // //     return (
// // // // // // // // // //         <div className="cart-container">
// // // // // // // // // //             <h1 className="cart-title">Your Cart</h1>
// // // // // // // // // //             <ul className="cart-item-list">
// // // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // // //                     <CartItem 
// // // // // // // // // //                         key={item.id} 
// // // // // // // // // //                         item={item} 
// // // // // // // // // //                         quantity={item.quantity} 
// // // // // // // // // //                         onRemove={handleRemoveItem} 
// // // // // // // // // //                         onUpdateQuantity={handleUpdateQuantity} 
// // // // // // // // // //                     />
// // // // // // // // // //                 ))}
// // // // // // // // // //             </ul>
// // // // // // // // // //             <h2 className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</h2>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default CartPage;
// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import CartItem from '../components/CartItem';

// // // // // // // // // const CartPage = () => {
// // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // //             try {
// // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // //                 });
// // // // // // // // //                 setCartItems(response.data);
// // // // // // // // //             } catch (err) {
// // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // //             } finally {
// // // // // // // // //                 setLoading(false);
// // // // // // // // //             }
// // // // // // // // //         };

// // // // // // // // //         fetchCartItems();
// // // // // // // // //     }, []);

// // // // // // // // //     const handleRemoveItem = async (itemId) => {
// // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // //         try {
// // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // //             });
// // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // //         } catch (err) {
// // // // // // // // //             console.error('Failed to remove item:', err);
// // // // // // // // //             setError('Failed to remove item from cart.');
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleUpdateQuantity = (itemId, newQuantity) => {
// // // // // // // // //         setCartItems(cartItems.map(item => 
// // // // // // // // //             item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // //         ));
// // // // // // // // //     };

// // // // // // // // //     const totalAmount = cartItems.reduce((total, item) => {
// // // // // // // // //         return total + (item.price * item.quantity || 0);
// // // // // // // // //     }, 0);

// // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // //     return (
// // // // // // // // //         <div>
// // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // //             <ul>
// // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // //                     <CartItem 
// // // // // // // // //                         key={item.id} 
// // // // // // // // //                         item={item} 
// // // // // // // // //                         quantity={item.quantity} 
// // // // // // // // //                         onRemove={handleRemoveItem} 
// // // // // // // // //                         onUpdateQuantity={handleUpdateQuantity} 
// // // // // // // // //                     />
// // // // // // // // //                 ))}
// // // // // // // // //             </ul>
// // // // // // // // //             <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default CartPage;




// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import CartItem from '../components/CartItem';
// // // // // // // // // import '../styles/CartPage.css'; // Import CSS for styling

// // // // // // // // // const CartPage = () => {
// // // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // //     const [error, setError] = useState('');

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         const fetchCartItems = async () => {
// // // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // // //             try {
// // // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // // //                 });
// // // // // // // // //                 setCartItems(response.data);
// // // // // // // // //             } catch (err) {
// // // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // // //             } finally {
// // // // // // // // //                 setLoading(false);
// // // // // // // // //             }
// // // // // // // // //         };

// // // // // // // // //         fetchCartItems();
// // // // // // // // //     }, []);

// // // // // // // // //     const handleRemoveItem = async (itemId) => {
// // // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // // //         try {
// // // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // // //             });
// // // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // // //         } catch (err) {
// // // // // // // // //             console.error('Failed to remove item:', err);
// // // // // // // // //             setError('Failed to remove item from cart.');
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleUpdateQuantity = (itemId, newQuantity) => {
// // // // // // // // //         setCartItems(cartItems.map(item => 
// // // // // // // // //             item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // // //         ));
// // // // // // // // //     };

// // // // // // // // //     const handlePlaceOrder = () => {
// // // // // // // // //         alert('Order placed!');
// // // // // // // // //     };

// // // // // // // // //     // Calculate total price at page level
// // // // // // // // //     const totalAmount = cartItems.reduce((total, item) => {
// // // // // // // // //         const itemPrice = parseFloat(item.price) || 0; // Ensure price is numeric
// // // // // // // // //         return total + (itemPrice * item.quantity || 0); // Calculate total
// // // // // // // // //     }, 0);

// // // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // // //     return (
// // // // // // // // //         <div className="cart-container">
// // // // // // // // //             <h1>Your Cart</h1>
// // // // // // // // //             <ul className="cart-items-list">
// // // // // // // // //                 {cartItems.map(item => (
// // // // // // // // //                     <CartItem 
// // // // // // // // //                         key={item.id} 
// // // // // // // // //                         item={item} 
// // // // // // // // //                         quantity={item.quantity} 
// // // // // // // // //                         onRemove={handleRemoveItem} 
// // // // // // // // //                         onUpdateQuantity={handleUpdateQuantity} 
// // // // // // // // //                     />
// // // // // // // // //                 ))}
// // // // // // // // //             </ul>
            

// // // // // // // // //             {/* Total section displayed centrally */}
// // // // // // // // //             <div className="total-section">
// // // // // // // // //                 <h2>Total Amount: ${totalAmount.toFixed(2)}</h2> {/* Display total price */}
// // // // // // // // //                 <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default CartPage;





// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import CartItem from '../components/CartItem'; // Import your CartItem component
// // // // // // // // import '../styles/CartPage.css'; // Import CSS for styling

// // // // // // // // const CartPage = () => {
// // // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // //     const [error, setError] = useState('');
// // // // // // // //     const [total, setTotal] = useState(0);

// // // // // // // //     useEffect(() => {
// // // // // // // //         const fetchCartItems = async () => {
// // // // // // // //             const token = localStorage.getItem('token');
// // // // // // // //             try {
// // // // // // // //                 const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // // //                     headers: { Authorization: `Token ${token}` }
// // // // // // // //                 });
// // // // // // // //                 setCartItems(response.data);
// // // // // // // //             } catch (err) {
// // // // // // // //                 console.error('Failed to fetch cart items:', err);
// // // // // // // //                 setError('Failed to fetch cart items.');
// // // // // // // //             } finally {
// // // // // // // //                 setLoading(false);
// // // // // // // //             }
// // // // // // // //         };

// // // // // // // //         fetchCartItems();
// // // // // // // //     }, []);

// // // // // // // //     const fetchBookDetails = async (bookId) => {
// // // // // // // //         // Implement the same logic as in CartItem for fetching book details
// // // // // // // //         try {
// // // // // // // //             const response = await axios.get(`http://127.0.0.1:8000/api/books/${bookId}/`);
// // // // // // // //             return response.data;
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('Failed to fetch book details:', error);
// // // // // // // //             return null;
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const calculateTotal = (items) => {
// // // // // // // //         return items.reduce((total, item) => {
// // // // // // // //             return total + (parseFloat(item.price) || 0) * (item.quantity || 0);
// // // // // // // //         }, 0);
// // // // // // // //     };

// // // // // // // //     useEffect(() => {
// // // // // // // //         const updateCartWithBookDetails = async () => {
// // // // // // // //             if (cartItems.length > 0) {
// // // // // // // //                 const updatedItems = await Promise.all(cartItems.map(async (item) => {
// // // // // // // //                     const bookDetails = await fetchBookDetails(item.book_id);
// // // // // // // //                     return { ...item, ...bookDetails };
// // // // // // // //                 }));
                
// // // // // // // //                 setCartItems(updatedItems);
// // // // // // // //                 setTotal(calculateTotal(updatedItems));
// // // // // // // //             }
// // // // // // // //         };

// // // // // // // //         updateCartWithBookDetails();
// // // // // // // //     }, [cartItems]);

// // // // // // // //     const handleUpdateQuantity = async (itemId, newQuantity) => {
// // // // // // // //         if (newQuantity < 1) return;

// // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // //         try {
// // // // // // // //             await axios.patch(`http://127.0.0.1:8000/api/cart/${itemId}/`, { quantity: newQuantity }, {
// // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // //             });
// // // // // // // //             setCartItems(cartItems.map(item =>
// // // // // // // //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// // // // // // // //             ));
// // // // // // // //             setTotal(calculateTotal(cartItems));
// // // // // // // //         } catch (err) {
// // // // // // // //             console.error('Failed to update quantity:', err);
// // // // // // // //             setError('Failed to update quantity.');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleRemoveItem = async (itemId) => {
// // // // // // // //         const token = localStorage.getItem('token');
// // // // // // // //         try {
// // // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`, {
// // // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // // //             });
// // // // // // // //             setCartItems(cartItems.filter(item => item.id !== itemId));
// // // // // // // //             setTotal(calculateTotal(cartItems));
// // // // // // // //         } catch (err) {
// // // // // // // //             console.error('Failed to remove item:', err);
// // // // // // // //             setError('Failed to remove item from cart.');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handlePlaceOrder = () => {
// // // // // // // //         alert('Order placed!');
// // // // // // // //     };

// // // // // // // //     if (loading) return <p>Loading cart...</p>;
// // // // // // // //     if (error) return <p>{error}</p>;

// // // // // // // //     return (
// // // // // // // //         <div className="cart-container">
// // // // // // // //             <h1>Your Cart</h1>
// // // // // // // //             <ul className="cart-items-list">
// // // // // // // //                 {cartItems.map(item => (
// // // // // // // //                     <CartItem
// // // // // // // //                         key={item.id}
// // // // // // // //                         item={item}
// // // // // // // //                         quantity={item.quantity}
// // // // // // // //                         onRemove={handleRemoveItem}
// // // // // // // //                         onUpdateQuantity={handleUpdateQuantity}
// // // // // // // //                     />
// // // // // // // //                 ))}
// // // // // // // //             </ul>
// // // // // // // //             <div className="total-section">
// // // // // // // //                 <h2>Total Amount: ${total.toFixed(2)}</h2>
// // // // // // // //                 <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default CartPage;






// // // // // // // // src/pages/CartPage.js
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // const CartPage = () => {
// // // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // // //     const [loading, setLoading] = useState(true);

// // // // // // //     const fetchCartItems = async () => {
// // // // // // //         const token = localStorage.getItem('token');
// // // // // // //         try {
// // // // // // //             const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
// // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // //             });
// // // // // // //             setCartItems(response.data);
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Failed to fetch cart items:', error);
// // // // // // //         } finally {
// // // // // // //             setLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const updateQuantity = async (id, quantity) => {
// // // // // // //         const token = localStorage.getItem('token');
// // // // // // //         try {
// // // // // // //             await axios.put(`http://127.0.0.1:8000/api/cart/update/${id}/`, { quantity }, {
// // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // //             });
// // // // // // //             fetchCartItems(); // Refresh cart items after updating
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Failed to update quantity:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const removeItem = async (id) => {
// // // // // // //         const token = localStorage.getItem('token');
// // // // // // //         try {
// // // // // // //             await axios.delete(`http://127.0.0.1:8000/api/cart/remove/${id}/`, {
// // // // // // //                 headers: { Authorization: `Token ${token}` }
// // // // // // //             });
// // // // // // //             fetchCartItems(); // Refresh cart items after removal
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Failed to remove item:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     useEffect(() => {
// // // // // // //         fetchCartItems();
// // // // // // //     }, []);

// // // // // // //     if (loading) return <p>Loading...</p>;

// // // // // // //     return (
// // // // // // //         <div>
// // // // // // //             <h1>Your Cart</h1>
// // // // // // //             {cartItems.length === 0 ? (
// // // // // // //                 <p>Your cart is empty.</p>
// // // // // // //             ) : (
// // // // // // //                 <ul>
// // // // // // //                     {cartItems.map(item => (
// // // // // // //                         <li key={item.id}>
// // // // // // //                             <p>Book ID: {item.book_id}</p>
// // // // // // //                             <input
// // // // // // //                                 type="number"
// // // // // // //                                 value={item.quantity}
// // // // // // //                                 onChange={(e) => updateQuantity(item.id, e.target.value)}
// // // // // // //                                 min="1"
// // // // // // //                             />
// // // // // // //                             <button onClick={() => removeItem(item.id)}>Remove</button>
// // // // // // //                         </li>
// // // // // // //                     ))}
// // // // // // //                 </ul>
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default CartPage;


// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { getCartItems, updateCartItem, removeCartItem } from './utils'; // Ensure the path is correct

// // // // // // const CartPage = () => {
// // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // //     const [total, setTotal] = useState(0);

// // // // // //     useEffect(() => {
// // // // // //         const fetchCartItems = async () => {
// // // // // //             const items = await getCartItems();
// // // // // //             setCartItems(items);
// // // // // //             calculateTotal(items);
// // // // // //         };
// // // // // //         fetchCartItems();
// // // // // //     }, []);

// // // // // //     const getPriceById = (bookId) => {
// // // // // //         // Replace this with actual logic to fetch price from your data source
// // // // // //         // For now, returning a fixed price for testing
// // // // // //         return 20; // Example fixed price
// // // // // //     };

// // // // // //     const calculateTotal = (items) => {
// // // // // //         const totalAmount = items.reduce((sum, item) => sum + getPriceById(item.book_id) * item.quantity, 0);
// // // // // //         setTotal(totalAmount);
// // // // // //     };

// // // // // //     const handleQuantityChange = async (itemId, quantity) => {
// // // // // //         if (quantity < 1) return; // Prevent quantity from going below 1
// // // // // //         await updateCartItem(itemId, quantity);
// // // // // //         const updatedItems = cartItems.map(item => item.id === itemId ? { ...item, quantity } : item);
// // // // // //         setCartItems(updatedItems);
// // // // // //         calculateTotal(updatedItems);
// // // // // //     };

// // // // // //     const handleRemoveItem = async (itemId) => {
// // // // // //         await removeCartItem(itemId);
// // // // // //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// // // // // //         setCartItems(updatedItems);
// // // // // //         calculateTotal(updatedItems);
// // // // // //     };

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <h1>Your Cart</h1>
// // // // // //             {cartItems.length === 0 ? (
// // // // // //                 <p>Your cart is empty.</p>
// // // // // //             ) : (
// // // // // //                 cartItems.map(item => (
// // // // // //                     <div key={item.id}>
// // // // // //                         <h2>{item.book_id}</h2>
// // // // // //                         <input
// // // // // //                             type="number"
// // // // // //                             value={item.quantity}
// // // // // //                             onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
// // // // // //                         />
// // // // // //                         <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // // // // //                     </div>
// // // // // //                 ))
// // // // // //             )}
// // // // // //             <h2>Total: ${total}</h2>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default CartPage;




// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails } from './utils';

// // // // // const CartPage = () => {
// // // // //     const [cartItems, setCartItems] = useState([]);
// // // // //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// // // // //     const [total, setTotal] = useState(0);

// // // // //     useEffect(() => {
// // // // //         const fetchCartItems = async () => {
// // // // //             const items = await getCartItems();
// // // // //             setCartItems(items);
// // // // //             await fetchBookDetailsForItems(items);
// // // // //         };
// // // // //         fetchCartItems();
// // // // //     }, []);

// // // // //     const fetchBookDetailsForItems = async (items) => {
// // // // //         const details = {};
// // // // //         const fetchPromises = items.map(async (item) => {
// // // // //             const bookDetails = await fetchBookDetails(item.book_id);
// // // // //             details[item.book_id] = bookDetails;
// // // // //         });
// // // // //         await Promise.all(fetchPromises);
// // // // //         setBookDetailsMap(details);
// // // // //         calculateTotal(items, details);
// // // // //     };

// // // // //     const calculateTotal = (items, details) => {
// // // // //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// // // // //         setTotal(totalAmount);
// // // // //     };

// // // // //     const handleQuantityChange = async (itemId, quantity) => {
// // // // //         if (quantity < 1) return;
// // // // //         await updateCartItem(itemId, quantity);
// // // // //         const updatedItems = cartItems.map(item => item.id === itemId ? { ...item, quantity } : item);
// // // // //         setCartItems(updatedItems);
// // // // //         calculateTotal(updatedItems, bookDetailsMap);
// // // // //     };

// // // // //     const handleRemoveItem = async (itemId) => {
// // // // //         await removeCartItem(itemId);
// // // // //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// // // // //         setCartItems(updatedItems);
// // // // //         calculateTotal(updatedItems, bookDetailsMap);
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <h1>Your Cart</h1>
// // // // //             {cartItems.length === 0 ? (
// // // // //                 <p>Your cart is empty.</p>
// // // // //             ) : (
// // // // //                 cartItems.map(item => {
// // // // //                     const bookDetails = bookDetailsMap[item.book_id] || {};
// // // // //                     return (
// // // // //                         <div key={item.id}>
// // // // //                             <h2>{bookDetails.title || 'Loading...'}</h2>
// // // // //                             <p>{bookDetails.author || 'Loading...'}</p>
// // // // //                             {bookDetails.image && <img src={bookDetails.image} alt={bookDetails.title} />}
// // // // //                             <input
// // // // //                                 type="number"
// // // // //                                 value={item.quantity}
// // // // //                                 onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
// // // // //                             />
// // // // //                             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // // // //                         </div>
// // // // //                     );
// // // // //                 })
// // // // //             )}
// // // // //             <h2>Total: ${total}</h2>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CartPage;



// // // // import React, { useEffect, useState } from 'react';
// // // // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails } from './utils';

// // // // const CartPage = () => {
// // // //     const [cartItems, setCartItems] = useState([]);
// // // //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// // // //     const [total, setTotal] = useState(0);

// // // //     useEffect(() => {
// // // //         const fetchCartItems = async () => {
// // // //             const items = await getCartItems();
// // // //             setCartItems(items);
// // // //             await fetchBookDetailsForItems(items);
// // // //         };
// // // //         fetchCartItems();
// // // //     }, []);

// // // //     const fetchBookDetailsForItems = async (items) => {
// // // //         const details = {};
// // // //         const fetchPromises = items.map(async (item) => {
// // // //             const bookDetails = await fetchBookDetails(item.book_id);
// // // //             details[item.book_id] = bookDetails;
// // // //         });
// // // //         await Promise.all(fetchPromises);
// // // //         setBookDetailsMap(details);
// // // //         calculateTotal(items, details);
// // // //     };

// // // //     const calculateTotal = (items, details) => {
// // // //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// // // //         setTotal(totalAmount);
// // // //     };

// // // //     const handleQuantityChange = async (itemId, quantity) => {
// // // //         if (quantity < 1) return;
// // // //         await updateCartItem(itemId, quantity);
// // // //         const updatedItems = cartItems.map(item => item.id === itemId ? { ...item, quantity } : item);
// // // //         setCartItems(updatedItems);
// // // //         calculateTotal(updatedItems, bookDetailsMap);
// // // //     };

// // // //     const handleRemoveItem = async (itemId) => {
// // // //         await removeCartItem(itemId);
// // // //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// // // //         setCartItems(updatedItems);
// // // //         calculateTotal(updatedItems, bookDetailsMap);
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <h1>Your Cart</h1>
// // // //             {cartItems.length === 0 ? (
// // // //                 <p>Your cart is empty.</p>
// // // //             ) : (
// // // //                 cartItems.map(item => {
// // // //                     const bookDetails = bookDetailsMap[item.book_id] || {};
// // // //                     return (
// // // //                         <div key={item.id}>
// // // //                             <h2>{bookDetails.title || 'Loading...'}</h2>
// // // //                             <p>{bookDetails.author || 'Loading...'}</p>
// // // //                             {bookDetails.image && <img src={bookDetails.image} alt={bookDetails.title} />}
// // // //                             <input
// // // //                                 type="number"
// // // //                                 value={item.quantity}
// // // //                                 onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
// // // //                             />
// // // //                             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // // //                         </div>
// // // //                     );
// // // //                 })
// // // //             )}
// // // //             <h2>Total: ${total}</h2>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CartPage;



// // // // CartPage.js
// // // import React, { useEffect, useState } from 'react';
// // // import './CartPage.css'; // Import the styles
// // // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails } from './utils';

// // // const CartPage = () => {
// // //     const [cartItems, setCartItems] = useState([]);
// // //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// // //     const [total, setTotal] = useState(0);

// // //     useEffect(() => {
// // //         const fetchCartItems = async () => {
// // //             const items = await getCartItems();
// // //             setCartItems(items);
// // //             await fetchBookDetailsForItems(items);
// // //         };
// // //         fetchCartItems();
// // //     }, []);

// // //     const fetchBookDetailsForItems = async (items) => {
// // //         const details = {};
// // //         const fetchPromises = items.map(async (item) => {
// // //             const bookDetails = await fetchBookDetails(item.book_id);
// // //             details[item.book_id] = bookDetails;
// // //         });
// // //         await Promise.all(fetchPromises);
// // //         setBookDetailsMap(details);
// // //         calculateTotal(items, details);
// // //     };

// // //     const calculateTotal = (items, details) => {
// // //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// // //         setTotal(totalAmount);
// // //     };

// // //     const handleQuantityChange = async (itemId, quantity) => {
// // //         if (quantity < 1) return;
// // //         await updateCartItem(itemId, quantity);
// // //         const updatedItems = cartItems.map(item => item.id === itemId ? { ...item, quantity } : item);
// // //         setCartItems(updatedItems);
// // //         calculateTotal(updatedItems, bookDetailsMap);
// // //     };

// // //     const handleRemoveItem = async (itemId) => {
// // //         await removeCartItem(itemId);
// // //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// // //         setCartItems(updatedItems);
// // //         calculateTotal(updatedItems, bookDetailsMap);
// // //     };

// // //     return (
// // //         <div className="cart-container">
// // //             <h1>Your Cart</h1>
// // //             {cartItems.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cartItems.map(item => {
// // //                     const bookDetails = bookDetailsMap[item.book_id] || {};
// // //                     return (
// // //                         <div className="cart-item" key={item.id}>
// // //                             <div className="cart-item-info">
// // //                                 {bookDetails.image && <img src={bookDetails.image} alt={bookDetails.title} />}
// // //                                 <div>
// // //                                     <h2>{bookDetails.title || 'Loading...'}</h2>
// // //                                     <p>{bookDetails.author || 'Loading...'}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="cart-item-quantity">
// // //                                 <input
// // //                                     type="number"
// // //                                     value={item.quantity}
// // //                                     onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
// // //                                 />
// // //                             </div>
// // //                             <div className="cart-item-remove">
// // //                                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // //                             </div>
// // //                         </div>
// // //                     );
// // //                 })
// // //             )}
// // //             <div className="cart-total">
// // //                 <h2>Total: <span>${total}</span></h2>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CartPage;



// // // // CartPage.js

// // // import React, { useEffect, useState } from 'react';
// // // import './CartPage.css';
// // // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails } from './utils';

// // // const CartPage = () => {
// // //     const [cartItems, setCartItems] = useState([]);
// // //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// // //     const [total, setTotal] = useState(0);

// // //     useEffect(() => {
// // //         const fetchCartItems = async () => {
// // //             const items = await getCartItems();
// // //             setCartItems(items);
// // //             await fetchBookDetailsForItems(items);
// // //         };
// // //         fetchCartItems();
// // //     }, []);

// // //     const fetchBookDetailsForItems = async (items) => {
// // //         const details = {};
// // //         const fetchPromises = items.map(async (item) => {
// // //             const bookDetails = await fetchBookDetails(item.book_id);
// // //             details[item.book_id] = bookDetails;
// // //         });
// // //         await Promise.all(fetchPromises);
// // //         setBookDetailsMap(details);
// // //         calculateTotal(items, details);
// // //     };

// // //     const calculateTotal = (items, details) => {
// // //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// // //         setTotal(totalAmount);
// // //     };

// // //     // const handleQuantityChange = async (itemId, quantity) => {
// // //     //     if (quantity < 1) return;
// // //     //     await updateCartItem(itemId, quantity);
// // //     //     const updatedItems = cartItems.map(item => item.id === itemId ? { ...item, quantity } : item);
// // //     //     setCartItems(updatedItems);
// // //     //     calculateTotal(updatedItems, bookDetailsMap);
// // //     // };
// // //     const handleQuantityChange = async (itemId, newQuantity) => {
// // //         if (newQuantity < 1) return;
    
// // //         try {
// // //             console.log("Changing quantity for item:", itemId, "to:", newQuantity); // Log the change
// // //             await updateCartItem(itemId, newQuantity); // Step 1: Update backend
    
// // //             // Step 2: Update frontend state
// // //             const updatedItems = cartItems.map(item => 
// // //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// // //             );
// // //             setCartItems(updatedItems);
    
// // //             // Step 3: Recalculate total
// // //             calculateTotal(updatedItems, bookDetailsMap);
// // //         } catch (error) {
// // //             console.error('Error updating quantity:', error); // Log any errors
// // //         }
// // //     };
    
// // //     const handleRemoveItem = async (itemId) => {
// // //         await removeCartItem(itemId);
// // //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// // //         setCartItems(updatedItems);
// // //         calculateTotal(updatedItems, bookDetailsMap);
// // //     };

// // //     return (
// // //         <div className="cart-container">
// // //             <h1>Your Cart</h1>
// // //             {cartItems.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cartItems.map(item => {
// // //                     const bookDetails = bookDetailsMap[item.book_id] || {};
// // //                     return (
// // //                         <div className="cart-item" key={item.id}>
// // //                             <div className="cart-item-info">
// // //                                 {/* Display image if available from backend */}
// // //                                 {bookDetails.cover_image_url ? (
// // //                                     <img src={bookDetails.cover_image_url} alt={bookDetails.title} />
// // //                                 ) : bookDetails.imageLinks ? ( // Handle Google Books API image
// // //                                     <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
// // //                                 ) : (
// // //                                     <img src="placeholder-image-url.jpg" alt="Book cover placeholder" />
// // //                                 )}
// // //                                 <div>
// // //                                     <h2>{bookDetails.title || 'Loading...'}</h2>
// // //                                     <p>{bookDetails.author || 'Loading...'}</p>
// // //                                     <p>Price: ${bookDetails.price || 'N/A'}</p>
// // //                                 </div>
// // //                             </div>
// // //                             {/* <div className="cart-item-quantity">
// // //                                 <input
// // //                                     type="number"
// // //                                     value={item.quantity}
// // //                                     onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
// // //                                 />
// // //                             </div> */}
// // //                             <div className="cart-item-quantity">
// // //     <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
// // //     <input
// // //         type="number"
// // //         value={item.quantity}
// // //         readOnly // Make input read-only to avoid manual editing
// // //     />
// // //     <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
// // // </div>

// // //                             <div className="cart-item-remove">
// // //                                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// // //                             </div>
// // //                         </div>
// // //                     );
// // //                 })
// // //             )}
// // //             <div className="cart-total">
// // //                 <h2>Total: <span>${total}</span></h2>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // export default CartPage;
// // import React, { useEffect, useState } from 'react';
// // import './CartPage.css';
// // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails } from './utils';

// // const Cart = () => {
// //     const [cartItems, setCartItems] = useState([]);
// //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// //     const [total, setTotal] = useState(0);

// //     useEffect(() => {
// //         const fetchCartItems = async () => {
// //             const items = await getCartItems();
// //             setCartItems(items);
// //             await fetchBookDetailsForItems(items);
// //         };
// //         fetchCartItems();
// //     }, []);

// //     const fetchBookDetailsForItems = async (items) => {
// //         const details = {};
// //         const fetchPromises = items.map(async (item) => {
// //             const bookDetails = await fetchBookDetails(item.book_id);
// //             details[item.book_id] = bookDetails;
// //         });
// //         await Promise.all(fetchPromises);
// //         setBookDetailsMap(details);
// //         calculateTotal(items, details);
// //     };

// //     const calculateTotal = (items, details) => {
// //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// //         setTotal(totalAmount);
// //     };

// //     const handleQuantityChange = async (itemId, newQuantity) => {
// //         if (newQuantity < 1) return;

// //         try {
// //             console.log("Changing quantity for item:", itemId, "to:", newQuantity);
// //             await updateCartItem(itemId, newQuantity); // Update backend using POST

// //             // Update frontend state
// //             const updatedItems = cartItems.map(item => 
// //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// //             );
// //             setCartItems(updatedItems);

// //             // Recalculate total
// //             calculateTotal(updatedItems, bookDetailsMap);
// //         } catch (error) {
// //             console.error('Error updating quantity:', error);
// //         }
// //     };

// //     const handleRemoveItem = async (itemId) => {
// //         await removeCartItem(itemId);
// //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// //         setCartItems(updatedItems);
// //         calculateTotal(updatedItems, bookDetailsMap);
// //     };

// //     return (
// //         <div className="cart-container">
// //             <h1>Your Cart</h1>
// //             {cartItems.length === 0 ? (
// //                 <p>Your cart is empty.</p>
// //             ) : (
// //                 cartItems.map(item => {
// //                     const bookDetails = bookDetailsMap[item.book_id] || {};
// //                     return (
// //                         <div className="cart-item" key={item.id}>
// //                             <div className="cart-item-info">
// //                                 {bookDetails.cover_image_url ? (
// //                                     <img src={bookDetails.cover_image_url} alt={bookDetails.title} />
// //                                 ) : bookDetails.imageLinks ? (
// //                                     <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
// //                                 ) : (
// //                                     <img src="placeholder-image-url.jpg" alt="Book cover placeholder" />
// //                                 )}
// //                                 <div>
// //                                     <h2>{bookDetails.title || 'Loading...'}</h2>
// //                                     <p>{bookDetails.author || 'Loading...'}</p>
// //                                     <p>Price: ${bookDetails.price || 'N/A'}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="cart-item-quantity">
// //                                 <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
// //                                 <input
// //                                     type="number"
// //                                     value={item.quantity}
// //                                     readOnly
// //                                 />
// //                                 <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
// //                             </div>
// //                             <div className="cart-item-remove">
// //                                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// //                             </div>
// //                         </div>
// //                     );
// //                 })
// //             )}
// //             <div className="cart-total">
// //                 <h2>Total: <span>${total}</span></h2>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Cart;
// // // // CartPage.js
// // // import React, { useEffect, useState } from 'react';
// // // import './CartPage.css';
// // // import { getCartItems, updateCartItem, removeCartItem, fetchBookDetails, placeOrder } from './utils';

// // // const CartPage = () => {
// // //     const [cartItems, setCartItems] = useState([]);
// // //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// // //     const [total, setTotal] = useState(0);

// // //     useEffect(() => {
// // //         const fetchCartItems = async () => {
// // //             const items = await getCartItems();
// // //             setCartItems(items);
// // //             await fetchBookDetailsForItems(items);
// // //         };
// // //         fetchCartItems();
// // //     }, []);

// // //     const fetchBookDetailsForItems = async (items) => {
// // //         // ...existing code...
// // //     };

// // //     const calculateTotal = (items, details) => {
// // //         // ...existing code...
// // //     };

// // //     const handleQuantityChange = async (itemId, newQuantity) => {
// // //         // ...existing code...
// // //     };

// // //     const handleRemoveItem = async (itemId) => {
// // //         // ...existing code...
// // //     };

// // //     const handlePlaceOrder = async () => {
// // //         try {
// // //             await placeOrder(); // Call the placeOrder function
// // //             alert('Your order has been placed successfully!');

// // //             // Clear the cart
// // //             setCartItems([]);
// // //             localStorage.removeItem('cart'); // Clear cart in localStorage
// // //         } catch (error) {
// // //             console.error('Error placing order:', error);
// // //             alert('There was an error placing your order. Please try again.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="cart-container">
// // //             <h1>Your Cart</h1>
// // //             {cartItems.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cartItems.map(item => {
// // //                     // ...existing code for displaying items...
// // //                 })
// // //             )}
// // //             <div className="cart-total">
// // //                 <h2>Total: <span>${total}</span></h2>
// // //             </div>
// // //             <button onClick={handlePlaceOrder}>Place Order</button> {/* New button */}
// // //         </div>
// // //     );
// // // };

// // // export default CartPage;



// import React, { useEffect, useState } from 'react';
// import './CartPage.css';
// import { getCartItems, updateCartItem, removeCartItem, clearCart, fetchBookDetails } from './utils';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [bookDetailsMap, setBookDetailsMap] = useState({});
//     const [total, setTotal] = useState(0);

//     // Fetch cart items on component mount
//     useEffect(() => {
//         const fetchCartItems = async () => {
//             const items = await getCartItems();
//             setCartItems(items);
//             await fetchBookDetailsForItems(items);
//         };
//         fetchCartItems();
//     }, []);

//     const fetchBookDetailsForItems = async (items) => {
//         const details = {};
//         const fetchPromises = items.map(async (item) => {
//             const bookDetails = await fetchBookDetails(item.book_id);
//             details[item.book_id] = bookDetails;
//         });
//         await Promise.all(fetchPromises);
//         setBookDetailsMap(details);
//         calculateTotal(items, details);
//     };

//     const calculateTotal = (items, details) => {
//         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
//         setTotal(totalAmount);
//     };

//     const handleQuantityChange = async (itemId, newQuantity) => {
//         if (newQuantity < 1) return;

//         try {
//             await updateCartItem(itemId, newQuantity);
//             const updatedItems = cartItems.map(item =>
//                 item.id === itemId ? { ...item, quantity: newQuantity } : item
//             );
//             setCartItems(updatedItems);
//             calculateTotal(updatedItems, bookDetailsMap);
//         } catch (error) {
//             console.error('Error updating quantity:', error);
//         }
//     };

//     const handleRemoveItem = async (itemId) => {
//         await removeCartItem(itemId);
//         const updatedItems = cartItems.filter(item => item.id !== itemId);
//         setCartItems(updatedItems);
//         calculateTotal(updatedItems, bookDetailsMap);
//     };

//     const handlePlaceOrder = async () => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             alert('Please log in to place an order.');
//             return;
//         }
    
//         try {
//             await clearCart();
//             // Clear frontend state
//             alert('Order placed successfully!');
//         } catch (error) {
//             console.error('Error placing order:', error);
//         }
//     };
    

//     return (
//         <div className="cart-container">
//             <h1>Your Cart</h1>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     {cartItems.map(item => {
//                         const bookDetails = bookDetailsMap[item.book_id] || {};
//                         return (
//                             <div className="cart-item" key={item.id}>
//                                 <div className="cart-item-info">
//                                     {bookDetails.cover_image_url ? (
//                                         <img src={bookDetails.cover_image_url} alt={bookDetails.title} />
//                                     ) : bookDetails.imageLinks ? (
//                                         <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
//                                     ) : (
//                                         <img src="https://via.placeholder.com/150" alt="Book cover placeholder" />
//                                     )}
//                                     <div>
//                                         <h2>{bookDetails.title || 'Loading...'}</h2>
//                                         <p>{bookDetails.author || 'Loading...'}</p>
//                                         <p>Price: ${bookDetails.price || 'N/A'}</p>
//                                     </div>
//                                 </div>
//                                 <div className="cart-item-quantity">
//                                     <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//                                     <input type="number" value={item.quantity} readOnly />
//                                     <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                                 </div>
//                                 <div className="cart-item-remove">
//                                     <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                     <div className="cart-total">
//                         <h2>Total: <span>${total}</span></h2>
//                     </div>
//                     <button className="place-order-btn" onClick={handlePlaceOrder}>
//                         Place Order
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;



// // import React, { useEffect, useState } from 'react';
// // import './CartPage.css';
// // import { getCartItems, updateCartItem, removeCartItem, clearCart, fetchBookDetails } from './utils';

// // const Cart = () => {
// //     const [cartItems, setCartItems] = useState([]);
// //     const [bookDetailsMap, setBookDetailsMap] = useState({});
// //     const [total, setTotal] = useState(0);
// //     const [hasAlerted, setHasAlerted] = useState(false); // Track if the alert has been shown

// //     // Check if user is logged in
// //     const isLoggedIn = !!localStorage.getItem('token');

// //     // Fetch cart items on component mount
// //     useEffect(() => {
// //         const fetchCartItems = async () => {
// //             if (!isLoggedIn) {
// //                 if (!hasAlerted) {
// //                     alert('Please log in to view your cart.');
// //                     setHasAlerted(true); // Mark as alerted
// //                 }
// //                 return;
// //             }

// //             const items = await getCartItems();
// //             setCartItems(items);
// //             await fetchBookDetailsForItems(items);
// //         };
// //         fetchCartItems();
// //     }, [isLoggedIn, hasAlerted]); // Add hasAlerted to dependencies

// //     const fetchBookDetailsForItems = async (items) => {
// //         const details = {};
// //         const fetchPromises = items.map(async (item) => {
// //             const bookDetails = await fetchBookDetails(item.book_id);
// //             details[item.book_id] = bookDetails;
// //         });
// //         await Promise.all(fetchPromises);
// //         setBookDetailsMap(details);
// //         calculateTotal(items, details);
// //     };

// //     const calculateTotal = (items, details) => {
// //         const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
// //         setTotal(totalAmount);
// //     };

// //     const handleQuantityChange = async (itemId, newQuantity) => {
// //         if (newQuantity < 1) return;

// //         try {
// //             await updateCartItem(itemId, newQuantity);
// //             const updatedItems = cartItems.map(item =>
// //                 item.id === itemId ? { ...item, quantity: newQuantity } : item
// //             );
// //             setCartItems(updatedItems);
// //             calculateTotal(updatedItems, bookDetailsMap);
// //         } catch (error) {
// //             console.error('Error updating quantity:', error);
// //         }
// //     };

// //     const handleRemoveItem = async (itemId) => {
// //         await removeCartItem(itemId);
// //         const updatedItems = cartItems.filter(item => item.id !== itemId);
// //         setCartItems(updatedItems);
// //         calculateTotal(updatedItems, bookDetailsMap);
// //     };

// //     const handlePlaceOrder = async () => {
// //         if (!isLoggedIn) {
// //             alert('Please log in to place an order.');
// //             return;
// //         }

// //         try {
// //             await clearCart();
// //             // Clear frontend state
// //             alert('Order placed successfully!');
// //             setCartItems([]); // Clear the cart items from the state
// //             setTotal(0); // Reset total
// //             setBookDetailsMap({}); // Reset book details
// //         } catch (error) {
// //             console.error('Error placing order:', error);
// //         }
// //     };

// //     return (
// //         <div className="cart-container">
// //             <h1>Your Cart</h1>
// //             {cartItems.length === 0 ? (
// //                 <p>Your cart is empty.</p>
// //             ) : (
// //                 <>
// //                     {cartItems.map(item => {
// //                         const bookDetails = bookDetailsMap[item.book_id] || {};
// //                         return (
// //                             <div className="cart-item" key={item.id}>
// //                                 <div className="cart-item-info">
// //                                     {bookDetails.cover_image_url ? (
// //                                         <img src={bookDetails.cover_image_url} alt={bookDetails.title} />
// //                                     ) : (
// //                                         <img src="https://via.placeholder.com/150" alt="Book cover placeholder" />
// //                                     )}
// //                                     <div>
// //                                         <h2>{bookDetails.title || 'Loading...'}</h2>
// //                                         <p>{bookDetails.author || 'Loading...'}</p>
// //                                         <p>Price: ${bookDetails.price || 'N/A'}</p>
// //                                     </div>
// //                                 </div>
// //                                 <div className="cart-item-quantity">
// //                                     <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
// //                                     <input type="number" value={item.quantity} readOnly />
// //                                     <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
// //                                 </div>
// //                                 <div className="cart-item-remove">
// //                                     <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })}
// //                     <div className="cart-total">
// //                         <h2>Total: <span>${total}</span></h2>
// //                     </div>
// //                     <button className="place-order-btn" onClick={handlePlaceOrder}>
// //                         Place Order
// //                     </button>
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default Cart;
import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { getCartItems, updateCartItem, removeCartItem, clearCart, fetchBookDetails } from './utils';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [bookDetailsMap, setBookDetailsMap] = useState({});
    const [total, setTotal] = useState(0);

    // Check if the user is logged in by verifying the presence of a token in localStorage
    const isLoggedIn = !!localStorage.getItem('token'); // Assumes token is stored in localStorage

    // Fetch cart items on component mount
    useEffect(() => {
        const fetchCartItems = async () => {
            if (!isLoggedIn) {
                alert('Please log in to view your cart.');
                return; // Prevent further execution if not logged in
            }
            const items = await getCartItems();
            setCartItems(items);
            await fetchBookDetailsForItems(items);
        };
        fetchCartItems();
    }, [isLoggedIn]);

    const fetchBookDetailsForItems = async (items) => {
        const details = {};
        const fetchPromises = items.map(async (item) => {
            const bookDetails = await fetchBookDetails(item.book_id);
            details[item.book_id] = bookDetails;
        });
        await Promise.all(fetchPromises);
        setBookDetailsMap(details);
        calculateTotal(items, details);
    };

    // const calculateTotal = (items, details) => {
    //     const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
    //     setTotal(totalAmount);
    // };
    const calculateTotal = (items, details) => {
        const totalAmount = items.reduce((sum, item) => sum + (details[item.book_id]?.price || 0) * item.quantity, 0);
        setTotal(totalAmount.toFixed(2)); // Convert to string with 2 decimal places
    };
    
    const handleQuantityChange = async (itemId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            await updateCartItem(itemId, newQuantity);
            const updatedItems = cartItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(updatedItems);
            calculateTotal(updatedItems, bookDetailsMap);
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        await removeCartItem(itemId);
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
        calculateTotal(updatedItems, bookDetailsMap);
    };

    const handlePlaceOrder = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in to place an order.');
            return;
        }

        try {
            await clearCart();
            setCartItems([]); // Clear frontend state
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => {
                        const bookDetails = bookDetailsMap[item.book_id] || {};
                        return (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-info">
                                    {bookDetails.cover_image_url ? (
                                        <img src={bookDetails.cover_image_url} alt={bookDetails.title} />
                                    ) : bookDetails.imageLinks ? (
                                        <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
                                    ) : (
                                        <img src="https://via.placeholder.com/150" alt="Book cover placeholder" />
                                    )}
                                    <div>
                                        <h2>{bookDetails.title || 'Loading...'}</h2>
                                        <p>{bookDetails.author || 'Loading...'}</p>
                                        <p>Price: ${bookDetails.price || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="cart-item-quantity">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                    <input type="number" value={item.quantity} readOnly />
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <div className="cart-item-remove">
                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="cart-total">
                        <h2>Total: <span>${total}</span></h2>
                    </div>
                    <button className="place-order-btn" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
