// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import WishlistItem from '../components/WishlistItem';

// // // // const WishlistPage = () => {
// // // //     const [wishlistItems, setWishlistItems] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [error, setError] = useState('');

// // // //     useEffect(() => {
// // // //         const fetchWishlistItems = async () => {
// // // //             const token = localStorage.getItem('token');
// // // //             try {
// // // //                 const response = await axios.get('http://127.0.0.1:8000/api/wishlist/', {
// // // //                     headers: { Authorization: `Token ${token}` }
// // // //                 });
// // // //                 setWishlistItems(response.data);
// // // //             } catch (err) {
// // // //                 console.error('Failed to fetch wishlist items:', err);
// // // //                 setError('Failed to fetch wishlist items.');
// // // //             } finally {
// // // //                 setLoading(false);
// // // //             }
// // // //         };

// // // //         fetchWishlistItems();
// // // //     }, []);

// // // //     const handleRemoveItem = async (bookId) => {
// // // //         const token = localStorage.getItem('token');
// // // //         try {
// // // //             await axios.delete(`http://127.0.0.1:8000/api/wishlist/${bookId}/`, {
// // // //                 headers: { Authorization: `Token ${token}` }
// // // //             });
// // // //             setWishlistItems(wishlistItems.filter(item => item.book_id !== bookId));
// // // //         } catch (error) {
// // // //             console.error('Failed to remove book from wishlist:', error);
// // // //         }
// // // //     };

// // // //     if (loading) return <p>Loading wishlist...</p>;
// // // //     if (error) return <p>{error}</p>;

// // // //     return (
// // // //         <div>
// // // //             <h1>Your Wishlist</h1>
// // // //             <ul>
// // // //                 {wishlistItems.map(item => (
// // // //                     <WishlistItem 
// // // //                         key={item.book_id} 
// // // //                         bookId={item.book_id} 
// // // //                         onRemove={() => handleRemoveItem(item.book_id)} 
// // // //                     />
// // // //                 ))}
// // // //             </ul>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default WishlistPage;



// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import WishlistItem from '../components/WishlistItem';

// // // const WishlistPage = () => {
// // //     const [wishlistItems, setWishlistItems] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState('');

// // //     useEffect(() => {
// // //         const fetchWishlistItems = async () => {
// // //             const token = localStorage.getItem('token');
// // //             try {
// // //                 const response = await axios.get('http://127.0.0.1:8000/api/wishlist/', {
// // //                     headers: { Authorization: `Token ${token}` }
// // //                 });
// // //                 setWishlistItems(response.data);
// // //             } catch (err) {
// // //                 console.error('Failed to fetch wishlist items:', err);
// // //                 setError('Failed to fetch wishlist items.');
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         fetchWishlistItems();
// // //     }, []);

// // //     const handleRemoveItem = async (bookId) => {
// // //         const token = localStorage.getItem('token');
// // //         try {
// // //             // Make sure to use the correct API endpoint to delete the item
// // //             await axios.delete(`http://127.0.0.1:8000/api/wishlist/${bookId}/`, {
// // //                 headers: { Authorization: `Token ${token}` }
// // //             });
// // //             // Update the local state to reflect the removal
// // //             setWishlistItems(wishlistItems.filter(item => item.book_id !== bookId));
// // //             alert('Book removed from wishlist!');
// // //         } catch (error) {
// // //             console.error('Failed to remove book from wishlist:', error);
// // //         }
// // //     };

// // //     if (loading) return <p>Loading wishlist...</p>;
// // //     if (error) return <p>{error}</p>;

// // //     return (
// // //         <div>
// // //             <h1>Your Wishlist</h1>
// // //             <ul>
// // //                 {wishlistItems.map(item => (
// // //                     <WishlistItem 
// // //                         key={item.book_id} 
// // //                         bookId={item.book_id} 
// // //                         onRemove={() => handleRemoveItem(item.book_id)} 
// // //                     />
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // };

// // // export default WishlistPage;





// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // // import WishlistItem from '../components/WishlistItem';
// // // import '../../styles/Wishlist.css'; // Import the CSS file


// // const WishlistPage = () => {
// //     const [wishlistItems, setWishlistItems] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         const fetchWishlistItems = async () => {
// //             const token = localStorage.getItem('token');
// //             try {
// //                 const response = await axios.get('http://127.0.0.1:8000/api/wishlist/', {
// //                     headers: { Authorization: `Token ${token}` }
// //                 });
// //                 setWishlistItems(response.data);
// //             } catch (err) {
// //                 console.error('Failed to fetch wishlist items:', err);
// //                 setError('Failed to fetch wishlist items.');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchWishlistItems();
// //     }, []);

// //     const handleRemoveItem = async (itemId) => {
// //         const token = localStorage.getItem('token');
// //         try {
// //             await axios.delete(`http://127.0.0.1:8000/api/wishlist/${itemId}/`, {
// //                 headers: { Authorization: `Token ${token}` }
// //             });
// //             setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
// //         } catch (err) {
// //             console.error('Failed to remove item:', err);
// //             setError('Failed to remove item from wishlist.');
// //         }
// //     };

// //     if (loading) return <p>Loading wishlist...</p>;
// //     if (error) return <p>{error}</p>;

// //     return (
// //         <div>
// //             <h1>Your Wishlist</h1>
// //             <ul>
// //                 {wishlistItems.map(item => (
// //                     <WishlistItem 
// //                         key={item.id} 
// //                         item={item} 
// //                         onRemove={handleRemoveItem} 
// //                     />
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default WishlistPage;
// // import React, { useEffect, useState } from 'react';
// // import { getWishlistItems, removeWishlistItem, addToWishlist, fetchBookDetails } from './utils';
// // import './Wishlist.css';

// // const WishlistPage = () => {
// //     const [wishlistItems, setWishlistItems] = useState([]);
// //     const [bookDetailsMap, setBookDetailsMap] = useState({});

// //     useEffect(() => {
// //         const fetchWishlistItems = async () => {
// //             const items = await getWishlistItems();
// //             setWishlistItems(items);
// //             await fetchBookDetailsForItems(items);
// //         };
// //         fetchWishlistItems();
// //     }, []);

// //     const fetchBookDetailsForItems = async (items) => {
// //         const details = {};
// //         const fetchPromises = items.map(async (bookId) => {
// //             const bookDetails = await fetchBookDetails(bookId);
// //             details[bookId] = bookDetails;
// //         });
// //         await Promise.all(fetchPromises);
// //         setBookDetailsMap(details);
// //     };

// //     const handleRemoveItem = async (bookId) => {
// //         await removeWishlistItem(bookId);
// //         setWishlistItems(wishlistItems.filter(item => item !== bookId));
// //     };

// //     const handleAddToWishlist = async (bookId) => {
// //         try {
// //             await addToWishlist(bookId);
// //             alert("Book added to wishlist.");
// //         } catch (error) {
// //             alert(error.response.data.error || "Error adding to wishlist.");
// //         }
// //     };

// //     return (
// //         <div className="wishlist-container">
// //             <h1>Your Wishlist</h1>
// //             {wishlistItems.length === 0 ? (
// //                 <p>Your wishlist is empty.</p>
// //             ) : (
// //                 wishlistItems.map(bookId => {
// //                     const bookDetails = bookDetailsMap[bookId] || {};
// //                     return (
// //                         <div key={bookId} className="wishlist-item">
// //                             <h2>{bookDetails.title || 'Loading...'}</h2>
// //                             <p>{bookDetails.author || 'Loading...'}</p>
// //                             <img src={bookDetails.cover_image_url || bookDetails.imageLinks?.thumbnail || 'placeholder-image-url.jpg'} alt={bookDetails.title} />
// //                             <button onClick={() => handleRemoveItem(bookId)}>Remove</button>
// //                         </div>
// //                     );
// //                 })
// //             )}
// //         </div>
// //     );
// // };

// // export default WishlistPage;




// import React, { useEffect, useState } from 'react';
// import { getWishlistItems, addToWishlist, removeFromWishlist } from './utils';

// const WishlistPage = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [alert, setAlert] = useState('');

//     useEffect(() => {
//         const fetchWishlistItems = async () => {
//             const items = await getWishlistItems();
//             setWishlistItems(items);
//         };
//         fetchWishlistItems();
//     }, []);

//     const handleAddToWishlist = async (bookId) => {
//         try {
//             await addToWishlist(bookId);
//             // Optionally refresh wishlist items here
//         } catch (error) {
//             setAlert(error.error); // Show the error message
//         }
//     };

//     const handleRemoveFromWishlist = async (id) => {
//         await removeFromWishlist(id);
//         const updatedItems = wishlistItems.filter(item => item.id !== id);
//         setWishlistItems(updatedItems);
//     };

//     return (
//         <div>
//             <h1>Your Wishlist</h1>
//             {alert && <p>{alert}</p>}
//             {wishlistItems.length === 0 ? (
//                 <p>Your wishlist is empty.</p>
//             ) : (
//                 wishlistItems.map(item => (
//                     <div key={item.id}>
//                         <h2>{item.book_id}</h2>
//                         <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// // export default WishlistPage;
// import React, { useEffect, useState } from 'react';
// import './Wishlist.css'
// import { getWishlistItems, fetchBookDetails, removeFromWishlist } from './utils';
// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [bookDetailsMap, setBookDetailsMap] = useState({});
//     const [loading, setLoading] = useState(true); // To manage loading state

//     useEffect(() => {
//         const fetchWishlistItems = async () => {
//             setLoading(true);
//             const items = await getWishlistItems();
//             setWishlistItems(items);
//             await fetchBookDetailsForItems(items);
//             setLoading(false);
//         };
//         fetchWishlistItems();
//     }, []);

//     const fetchBookDetailsForItems = async (items) => {
//         const details = {};
//         const fetchPromises = items.map(async (item) => {
//             const bookDetails = await fetchBookDetails(item.book_id);
//             details[item.book_id] = bookDetails;
//         });
//         await Promise.all(fetchPromises);
//         setBookDetailsMap(details);
//     };

//     const handleRemoveItem = async (itemId) => {
//         await removeFromWishlist(itemId);
//         const updatedItems = wishlistItems.filter(item => item.id !== itemId);
//         setWishlistItems(updatedItems);
//     };

//     if (loading) {
//         return <p>Loading...</p>; // Display loading message
//     }

//     return (
//         <div className="wishlist-container">
//             <h1>Your Wishlist</h1>
//             {wishlistItems.length === 0 ? (
//                 <p>Your wishlist is empty.</p>
//             ) : (
//                 wishlistItems.map(item => {
//                     const bookDetails = bookDetailsMap[item.book_id] || {};
//                     const imageUrl = bookDetails.cover_image_url || bookDetails.imageLinks?.thumbnail || 'placeholder-image-url.jpg';

//                     return (
//                         <div className="wishlist-item" key={item.id}>
//                             <div className="wishlist-item-info">
//                                 <img src={imageUrl} alt={bookDetails.title} />
//                                 <div>
//                                     <h2>{bookDetails.title || 'Loading...'}</h2>
//                                     {/* <p>{bookDetails.authors?.join(', ') || 'Loading...'}</p> */}
//                                     {/* <p>Price: ${bookDetails.price || 'N/A'}</p> */}
//                                 </div>
//                             </div>
//                             <div className="wishlist-item-remove">
//                                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                             </div>
//                         </div>
//                     );
//                 })
//             )}
//         </div>
//     );
// };

// export default Wishlist;





import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import { getWishlistItems, fetchBookDetails, removeFromWishlist } from './utils';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [bookDetailsMap, setBookDetailsMap] = useState({});
    const [loading, setLoading] = useState(true);

    // Check if the user is logged in by verifying the presence of a token in localStorage
    const isLoggedIn = !!localStorage.getItem('token'); // Assumes token is stored in localStorage

    useEffect(() => {
        const fetchWishlistItems = async () => {
            setLoading(true);

            // Check if the user is logged in
            if (!isLoggedIn) {
                alert('Please log in to view your wishlist.');
                setLoading(false); // Stop loading
                return; // Prevent further execution if not logged in
            }

            const items = await getWishlistItems();
            setWishlistItems(items);
            await fetchBookDetailsForItems(items);
            setLoading(false);
        };

        fetchWishlistItems();
    }, [isLoggedIn]); // Dependency on isLoggedIn to run effect when the login status changes

    const fetchBookDetailsForItems = async (items) => {
        const details = {};
        const fetchPromises = items.map(async (item) => {
            const bookDetails = await fetchBookDetails(item.book_id);
            details[item.book_id] = bookDetails;
        });
        await Promise.all(fetchPromises);
        setBookDetailsMap(details);
    };

    const handleRemoveItem = async (itemId) => {
        await removeFromWishlist(itemId);
        const updatedItems = wishlistItems.filter(item => item.id !== itemId);
        setWishlistItems(updatedItems);
    };

    if (loading) {
        return <p>Loading...</p>; // Display loading message
    }

    return (
        <div className="wishlist-container">
            <h1>Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                wishlistItems.map(item => {
                    const bookDetails = bookDetailsMap[item.book_id] || {};
                    const imageUrl = bookDetails.cover_image_url || bookDetails.imageLinks?.thumbnail || 'placeholder-image-url.jpg';

                    return (
                        <div className="wishlist-item" key={item.id}>
                            <div className="wishlist-item-info">
                                <img src={imageUrl} alt={bookDetails.title} />
                                <div>
                                    <h2>{bookDetails.title || 'Loading...'}</h2>
                                    {/* <p>{bookDetails.authors?.join(', ') || 'Loading...'}</p> */}
                                    {/* <p>Price: ${bookDetails.price || 'N/A'}</p> */}
                                </div>
                            </div>
                            <div className="wishlist-item-remove">
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Wishlist;
