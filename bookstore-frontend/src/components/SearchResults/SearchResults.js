// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import '../styles/SearchResults.css'; // Import styles for the search results

// // // // const SearchResults = ({ books }) => {
// // // //   return (
// // // //     <section className="search-results-section">
// // // //       <h2>Search Results</h2>
// // // //       <div className="search-results-container">
// // // //         {books.length > 0 ? (
// // // //           books.map((book) => (
// // // //             <div key={book.id} className="search-result-item">
// // // //               <Link to={`/book/${book.id}`} className="search-result-link">
// // // //                 <img
// // // //                   src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'}
// // // //                   alt={book.volumeInfo?.title || 'No title'}
// // // //                   className="search-result-image"
// // // //                 />
// // // //                 <div className="search-result-details">
// // // //                   <h3>{book.volumeInfo?.title || 'No title'}</h3>
// // // //                   <p>Authors: {book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
// // // //                   <p>Description: {book.volumeInfo?.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
// // // //                   {book.saleInfo && book.saleInfo.price ? (
// // // //                     <p>Price: {book.saleInfo.price}</p>
// // // //                   ) : (
// // // //                     <p>Price not available</p>
// // // //                   )}
// // // //                 </div>
// // // //               </Link>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>No books found</p>
// // // //         )}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default SearchResults;



// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import '../styles/SearchResults.css'; // Import styles for the search results

// // // const SearchResults = ({ books }) => {
// // //   return (
// // //     <section className="search-results-section">
// // //       <h2>Search Results</h2>
// // //       <div className="search-results-container">
// // //         {books.length > 0 ? (
// // //           books.map((book) => (
// // //             <div key={book.id} className="search-result-item">
// // //               <Link to={`/book/${book.id}`} className="search-result-link">
// // //                 <img
// // //                   src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'}
// // //                   alt={book.volumeInfo?.title || 'No title'}
// // //                   className="search-result-image"
// // //                 />
// // //                 <div className="search-result-details">
// // //                   <h3>{book.volumeInfo?.title || 'No title'}</h3>
// // //                   <p>Authors: {book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
// // //                   <p>Description: {book.volumeInfo?.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
// // //                   {book.saleInfo && book.saleInfo.price ? (
// // //                     <p>Price: {book.saleInfo.price}</p>
// // //                   ) : (
// // //                     <p>Price not available</p>
// // //                   )}
// // //                 </div>
// // //               </Link>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No books found</p>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default SearchResults;




// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './SearchResults.css';

// // const SearchResults = ({ books }) => {
// //   // const handleAddToCart = (book) => {
// //   //   console.log('Book data:', book); // Log the book data for debugging

// //   //   // Get the existing cart or initialize it
// //   //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

// //   //   // Parse and validate price
// //   //   const price = parseFloat(book.saleInfo?.price) || 0;
// //   //   console.log('Parsed Price:', price); // Log the parsed price for debugging

// //   //   // Check if the book is already in the cart
// //   //   const existingItem = storedCart.find(item => item.id === book.id);

// //   //   if (existingItem) {
// //   //     // Update quantity if item already exists
// //   //     const updatedCart = storedCart.map(item =>
// //   //       item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
// //   //     );
// //   //     localStorage.setItem('cart', JSON.stringify(updatedCart));
// //   //   } else {
// //   //     // Add new item to cart
// //   //     const bookToAdd = {
// //   //       id: book.id,
// //   //       title: book.volumeInfo?.title || 'No title',
// //   //       authors: book.volumeInfo?.authors?.join(', ') || 'No authors',
// //   //       price: isNaN(price) ? 0 : price, // Ensure price is valid
// //   //       image: book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196',
// //   //       quantity: 1
// //   //     };
// //   //     storedCart.push(bookToAdd);
// //   //     localStorage.setItem('cart', JSON.stringify(storedCart));
// //   //   }
// //   //   alert(`${book.volumeInfo?.title} has been added to your cart!`);
// //   // };



// //   const handleAddToCart = (book) => {
// //     if (book) {
// //       console.log('Book data:', book); // Log the book data for debugging
  
// //       // Retrieve user info from local storage
// //       const user = JSON.parse(localStorage.getItem('user'));
  
// //       if (!user) {
// //         console.error('User is not logged in');
// //         alert('Please log in to add items to your cart.');
// //         return;
// //       }
  
// //       // Use a unique key for the user's cart
// //       const cartKey = `cart_${user.id || user.username}`;
// //       console.log('User Cart Key:', cartKey); // Log cart key for debugging
  
// //       // Get the existing cart or initialize it
// //       let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
// //       console.log('Stored Cart:', cart); // Log stored cart for debugging
  
// //       // Determine book ID and parse/validate price
// //       const bookId = book.id || book.volumeInfo?.id;
// //       const price = parseFloat(book.saleInfo?.listPrice?.amount || book?.price || 0); // Adjusted price retrieval
// //       console.log('Parsed Price:', price); // Log the parsed price for debugging
  
// //       if (!bookId) {
// //         console.error('Book does not have a valid ID:', book);
// //         return;
// //       }
  
// //       // Check if the book is already in the cart
// //       const existingItem = cart.find(item => item.id === bookId);
  
// //       if (existingItem) {
// //         // Update quantity if item already exists
// //         const updatedCart = cart.map(item =>
// //           item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //         localStorage.setItem(cartKey, JSON.stringify(updatedCart));
// //       } else {
// //         // Add new item to cart
// //         const bookToAdd = {
// //           id: bookId,
// //           title: book.volumeInfo?.title || book?.title || 'No title',
// //           authors: book.volumeInfo?.authors?.join(', ') || book?.authors?.join(', ') || 'No authors',
// //           price: isNaN(price) ? 0 : price, // Ensure price is valid
// //           image: book.volumeInfo?.imageLinks?.thumbnail || book.cover_image_url || 'https://via.placeholder.com/128x196',
// //           quantity: 1
// //         };
// //         cart.push(bookToAdd);
// //         localStorage.setItem(cartKey, JSON.stringify(cart));
// //       }
  
// //       alert(`${book.volumeInfo?.title || book?.title} has been added to your cart!`);
// //     }
// //   };
  




// //   return (
// //     <section className="search-results-section">
// //       <h2>Search Results</h2>
// //       <div className="search-results-container">
// //         {books.length > 0 ? (
// //           books.map((book) => (
// //             <div key={book.id} className="search-result-item">
// //               <Link to={`/book/${book.id}`} className="search-result-link">
// //                 <img
// //                   src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'}
// //                   alt={book.volumeInfo?.title || 'No title'}
// //                   className="search-result-image"
// //                 />
// //                 <div className="search-result-details">
// //                   <h3>{book.volumeInfo?.title || 'No title'}</h3>
// //                   <p>Authors: {book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
// //                   <p>Description: {book.volumeInfo?.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
// //                   {book.saleInfo && book.saleInfo.price ? (
// //                     <p>Price: ${book.saleInfo.price}</p>
// //                   ) : (
// //                     <p>Price not available</p>
// //                   )}
// //                 </div>
// //               </Link>
// //               <button class='add-to-cart-button' onClick={() => handleAddToCart(book)}>Add to Cart</button>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No books found</p>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default SearchResults;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SearchResults.css';
// import AddToCartButton from '../AddToCartButton';  // Adjust the path if needed
// import AddToWishlistButton from '../AddToWishlistButton'; 
// const SearchResults = ({ books }) => {
//     const handleAddToWishlist = (book) => {
//         // Wishlist functionality here
//         // alert(`${book.volumeInfo?.title} added to your wishlist!`);
//     };
//     const handleAddToCart = (book) => {
//           if (book) {
//             console.log('Book data:', book); // Log the book data for debugging
        
//             // Retrieve user info from local storage
//             const user = JSON.parse(localStorage.getItem('user'));
        
//             if (!user) {
//               console.error('User is not logged in');
//               alert('Please log in to add items to your cart.');
//               return;
//             }
        
//             // Use a unique key for the user's cart
//             const cartKey = `cart_${user.id || user.username}`;
//             console.log('User Cart Key:', cartKey); // Log cart key for debugging
        
//             // Get the existing cart or initialize it
//             let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//             console.log('Stored Cart:', cart); // Log stored cart for debugging
        
//             // Determine book ID and parse/validate price
//             const bookId = book.id || book.volumeInfo?.id;
//             const price = parseFloat(book.saleInfo?.listPrice?.amount || book?.price || 0); // Adjusted price retrieval
//             console.log('Parsed Price:', price); // Log the parsed price for debugging
        
//             if (!bookId) {
//               console.error('Book does not have a valid ID:', book);
//               return;
//             }
        
//             // Check if the book is already in the cart
//             const existingItem = cart.find(item => item.id === bookId);
        
//             if (existingItem) {
//               // Update quantity if item already exists
//               const updatedCart = cart.map(item =>
//                 item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
//               );
//               localStorage.setItem(cartKey, JSON.stringify(updatedCart));
//             } else {
//               // Add new item to cart
//               const bookToAdd = {
//                 id: bookId,
//                 title: book.volumeInfo?.title || book?.title || 'No title',
//                 authors: book.volumeInfo?.authors?.join(', ') || book?.authors?.join(', ') || 'No authors',
//                 price: isNaN(price) ? 0 : price, // Ensure price is valid
//                 image: book.volumeInfo?.imageLinks?.thumbnail || book.cover_image_url || 'https://via.placeholder.com/128x196',
//                 quantity: 1
//               };
//               cart.push(bookToAdd);
//               localStorage.setItem(cartKey, JSON.stringify(cart));
//             }
        
//             alert(`${book.volumeInfo?.title || book?.title} has been added to your cart!`);
//           }
//         };
        

//     return (
//         <section className="search-results-section">
//             <h2>Search Results</h2>
//             <div className="search-results-container">
//                 {books.length > 0 ? (
//                     books.map((book) => (
                       
//                         <div className="search-result-item">
//     <Link to={`/book/${book.id}`} className="search-result-link">
//         <img
//             src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'}
//             alt={book.volumeInfo?.title || 'No title'}
//             className="search-result-image"
//         />
//         <div className="search-result-details">
//             <h3>{book.volumeInfo?.title || 'No title'}</h3>
//             <p>Authors: {book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
//             <p>Description: {book.volumeInfo?.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
//             {book.saleInfo && book.saleInfo.price ? (
//                 <p>Price: ${book.saleInfo.price}</p>
//             ) : (
//                 <p>Price not available</p>
//             )}
//         </div>
//     </Link>
//     <div class='c'>
//     {/* <button className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Add to Cart</button> */}
//     <AddToCartButton bookId={book.id} />
//     <AddToWishlistButton bookId={book.id} />
//     </div>
//     <button className="wishlist-button" onClick={() => handleAddToWishlist(book)}>
//         <i className="fas fa-heart"></i>
//     </button>
// </div>

//                     ))
//                 ) : (
//                     <p>No books found</p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default SearchResults;



import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';
import AddToCartButton from '../AddToCartButton';  // Adjust the path if needed
import { addToWishlist } from '../../pages/Wishlist/utils'; // Import your wishlist service

const SearchResults = ({ books }) => {
    const handleAddToWishlist = async (book) => {
        try {
            await addToWishlist(book.id); // Call the function to add to wishlist
            alert(`${book.volumeInfo?.title} added to your wishlist!`);
        } catch (error) {
            alert('This book is already in your wishlist or there was an error!');
            console.error('Wishlist error:', error);
        }
    };

    const handleAddToCart = (book) => {
        // Your existing handleAddToCart code
        if (book) {
            console.log('Book data:', book); // Log the book data for debugging
        
            const user = JSON.parse(localStorage.getItem('user'));
        
            if (!user) {
                console.error('User is not logged in');
                alert('Please log in to add items to your cart.');
                return;
            }

            const cartKey = `cart_${user.id || user.username}`;
            console.log('User Cart Key:', cartKey); // Log cart key for debugging

            let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
            console.log('Stored Cart:', cart); // Log stored cart for debugging

            const bookId = book.id || book.volumeInfo?.id;
            const price = parseFloat(book.saleInfo?.listPrice?.amount || book?.price || 0);
            console.log('Parsed Price:', price); // Log the parsed price for debugging

            if (!bookId) {
                console.error('Book does not have a valid ID:', book);
                return;
            }

            const existingItem = cart.find(item => item.id === bookId);

            if (existingItem) {
                const updatedCart = cart.map(item =>
                    item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
                );
                localStorage.setItem(cartKey, JSON.stringify(updatedCart));
            } else {
                const bookToAdd = {
                    id: bookId,
                    title: book.volumeInfo?.title || book?.title || 'No title',
                    authors: book.volumeInfo?.authors?.join(', ') || book?.authors?.join(', ') || 'No authors',
                    price: isNaN(price) ? 0 : price,
                    image: book.volumeInfo?.imageLinks?.thumbnail || book.cover_image_url || 'https://via.placeholder.com/128x196',
                    quantity: 1
                };
                cart.push(bookToAdd);
                localStorage.setItem(cartKey, JSON.stringify(cart));
            }

            alert(`${book.volumeInfo?.title || book?.title} has been added to your cart!`);
        }
    };

    return (
        <section className="search-results-section">
            <h2>Search Results</h2>
            <div className="search-results-container">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div className="search-result-item" key={book.id}>
                            <Link to={`/book/${book.id}`} className="search-result-link">
                                <img
                                    src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'}
                                    alt={book.volumeInfo?.title || 'No title'}
                                    className="search-result-image"
                                />
                                <div className="search-result-details">
                                    <h3>{book.volumeInfo?.title || 'No title'}</h3>
                                    <p>Authors: {book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
                                    <p>Description: {book.volumeInfo?.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
                                    {book.saleInfo && book.saleInfo.price ? (
                                        <p>Price: ${book.saleInfo.price}</p>
                                    ) : (
                                        <p>Price not available</p>
                                    )}
                                </div>
                            </Link>
                            <div className="c">
                                <AddToCartButton bookId={book.id} />
                                <button className="wishlist-button" onClick={() => handleAddToWishlist(book)}>
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
        </section>
    );
};

export default SearchResults;
