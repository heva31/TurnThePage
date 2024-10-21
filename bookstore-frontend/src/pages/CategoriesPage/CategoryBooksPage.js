// // // // // src/pages/CategoryBooksPage.js
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import './CategoryBooksPage.css';

// // // // const CategoryBooksPage = ({ match }) => {
// // // //     const [books, setBooks] = useState([]);
// // // //     const [error, setError] = useState(null);
// // // //     const categoryName = match.params.categoryName; // Get category name from URL params

// // // //     useEffect(() => {
// // // //         const fetchBooks = async () => {
// // // //             try {
// // // //                 const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}`);
// // // //                 setBooks(response.data.items || []);
// // // //             } catch (error) {
// // // //                 console.error('Error fetching books:', error);
// // // //                 setError('Failed to load books');
// // // //             }
// // // //         };

// // // //         fetchBooks();
// // // //     }, [categoryName]);

// // // //     return (
// // // //         <div className="category-books-page">
// // // //             <h1>Books in {categoryName}</h1>
// // // //             {error && <p className="error-message">{error}</p>}
// // // //             <div className="books-list">
// // // //                 {books.map((book) => (
// // // //                     <div key={book.id} className="book-item">
// // // //                         <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={book.volumeInfo?.title} />
// // // //                         <h3>{book.volumeInfo?.title}</h3>
// // // //                         <p>{book.volumeInfo?.authors?.join(', ')}</p>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CategoryBooksPage;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom';

// // // const CategoryBooksPage = () => {
// // //     const { categoryId } = useParams(); // Correctly destructure params
// // //     const [books, setBooks] = useState([]);
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         const fetchBooks = async () => {
// // //             try {
// // //                 const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}`);
// // //                 setBooks(response.data.items);
// // //             } catch (error) {
// // //                 console.error('Error fetching books:', error);
// // //                 setError('Failed to load books');
// // //             }
// // //         };

// // //         fetchBooks();
// // //     }, [categoryId]);

// // //     return (
// // //         <div>
// // //             <h1>Books in this Category</h1>
// // //             {error && <p className="error-message">{error}</p>}
// // //             <div className="book-list">
// // //                 {books.map(book => (
// // //                     <div key={book.id} className="book-item">
// // //                         <h2>{book.volumeInfo.title}</h2>
// // //                         <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CategoryBooksPage;





// // // src/pages/CategoryBooksPage.js
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import './CategoryBooksPage.css';

// // const CategoryBooksPage = () => {
// //   const { categoryId } = useParams();
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCategoryBooks = async () => {
// //       try {
// //         // Fetch books by category
// //         const categoryResponse = await axios.get(
// //           `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&maxResults=10`
// //         );

// //         // Fetch recently published or famous books (adjust the query parameters as needed)
// //         const recentOrFamousResponse = await axios.get(
// //           `https://www.googleapis.com/books/v1/volumes?q=news&orderBy=newest&maxResults=10`
// //         );

// //         // Combine both results
// //         const combinedBooks = [
// //           ...categoryResponse.data.items,
// //           ...recentOrFamousResponse.data.items,
// //         ];

// //         setBooks(combinedBooks);
// //       } catch (error) {
// //         console.error('Error fetching books:', error);
// //         setError('Failed to load books.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCategoryBooks();
// //   }, [categoryId]);

// //   return (
// //     <div className="category-books-page">
// //       <h1>Books in Category</h1>
// //       {error && <p className="error-message">{error}</p>}
// //       {loading ? (
// //         <p>Loading books...</p>
// //       ) : (
// //         <div className="books-list">
// //           {books.map((book) => (
// //             <div key={book.id} className="book-item">
// //               <img src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'} alt={book.volumeInfo?.title || 'No title'} />
// //               <h2>{book.volumeInfo?.title}</h2>
// //               <p>{book.volumeInfo?.authors?.join(', ')}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategoryBooksPage;










// // src/pages/CategoryBooksPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
// import axios from 'axios';
// import './CategoryBooksPage.css';

// const CategoryBooksPage = () => {
//   const { categoryId } = useParams();
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategoryBooks = async () => {
//       try {
//         // Fetch books by category
//         const categoryResponse = await axios.get(
//           `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&maxResults=10`
//         );

//         // Fetch recently published or famous books (adjust the query parameters as needed)
//         const recentOrFamousResponse = await axios.get(
//           `https://www.googleapis.com/books/v1/volumes?q=news&orderBy=newest&maxResults=10`
//         );

//         // Combine both results
//         const combinedBooks = [
//           ...categoryResponse.data.items,
//           ...recentOrFamousResponse.data.items,
//         ];

//         setBooks(combinedBooks);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         setError('Failed to load books.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryBooks();
//   }, [categoryId]);

//   return (
//     <div className="category-books-page">
//       <h1>Books in Category: {categoryId}</h1>
//       {error && <p className="error-message">{error}</p>}
//       {loading ? (
//         <p>Loading books...</p>
//       ) : (
//         <div className="books-list">
//           {books.length > 0 ? (
//             books.map((book) => (
//               <Link 
//                 to={`/book/${book.id}`} 
//                 key={book.id} 
//                 className="book-item"
//               >
//                 <img 
//                   src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'} 
//                   alt={book.volumeInfo?.title || 'No title'} 
//                 />
//                 <h2>{book.volumeInfo?.title || 'No title'}</h2>
//                 <p>{book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
//                 <p className="book-price">
//                        {book.saleInfo?.listPrice ? `$${book.saleInfo.listPrice.amount}` : 'Price not available'}
//                   </p>
//               </Link>
//             ))
//           ) : (
//             <p>No books available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryBooksPage;





// // // src/pages/CategoryBooksPage.js
// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
// // import axios from 'axios';
// // import './CategoryBooksPage.css';

// // const CategoryBooksPage = () => {
// //   const { categoryId } = useParams();
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCategoryBooks = async () => {
// //       try {
// //         // Fetch books by category with increased maxResults
// //         const categoryResponse = await axios.get(
// //           `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&maxResults=40`
// //         );

// //         // Fetch recently published or famous books with increased maxResults
// //         const recentOrFamousResponse = await axios.get(
// //           `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&orderBy=newest&maxResults=40`
// //         );

// //         // Combine both results
// //         const combinedBooks = [
// //           ...categoryResponse.data.items,
// //           ...recentOrFamousResponse.data.items,
// //         ];

// //         // Filter out books without price
// //         const filteredBooks = combinedBooks.filter(book => book.saleInfo?.listPrice);

// //         // Remove duplicate books by ID (if needed)
// //         const uniqueBooks = Array.from(new Set(filteredBooks.map(b => b.id)))
// //           .map(id => filteredBooks.find(b => b.id === id));

// //         setBooks(uniqueBooks);
// //       } catch (error) {
// //         console.error('Error fetching books:', error);
// //         setError('Failed to load books.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCategoryBooks();
// //   }, [categoryId]);

// //   return (
// //     <div className="category-books-page">
// //       <h1>Books in Category: {categoryId}</h1>
// //       {error && <p className="error-message">{error}</p>}
// //       {loading ? (
// //         <p>Loading books...</p>
// //       ) : (
// //         <div className="books-list">
// //           {books.length > 0 ? (
// //             books.map((book) => (
// //               <Link 
// //                 to={`/book/${book.id}`} 
// //                 key={book.id} 
// //                 className="book-item"
// //               >
// //                 <img 
// //                   src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'} 
// //                   alt={book.volumeInfo?.title || 'No title'} 
// //                 />
// //                 <h2>{book.volumeInfo?.title || 'No title'}</h2>
// //                 <p>{book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
// //                 <p className="book-price">
// //                   {book.saleInfo?.listPrice ? `$${book.saleInfo.listPrice.amount}` : 'Price not available'}
// //                 </p>
// //               </Link>
// //             ))
// //           ) : (
// //             <p>No books available with price.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategoryBooksPage;





// src/pages/CategoryBooksPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './CategoryBooksPage.css';

const CategoryBooksPage = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryBooks = async () => {
      try {
        // Fetch books by category with increased maxResults
        const categoryResponse = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&maxResults=40`
        );

        // Fetch recently published or famous books with increased maxResults
        const recentOrFamousResponse = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryId}&orderBy=newest&maxResults=40`
        );

        // Combine both results
        const combinedBooks = [
          ...categoryResponse.data.items,
          ...recentOrFamousResponse.data.items,
        ];

        // Filter out books without price
        const filteredBooks = combinedBooks.filter(book => book.saleInfo?.listPrice);

        // Remove duplicate books by ID (if needed)
        const uniqueBooks = Array.from(new Set(filteredBooks.map(b => b.id)))
          .map(id => filteredBooks.find(b => b.id === id));

        setBooks(uniqueBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to load books.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryBooks();
  }, [categoryId]);

  return (
    <div className="category-books-page">
      <h1>Books in Category: {categoryId}</h1>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="books-list">
          {books.length > 0 ? (
            books.map((book) => (
              <Link 
                to={`/book/${book.id}`} 
                key={book.id} 
                className="book-item"
              >
                <img 
                  src={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196'} 
                  alt={book.volumeInfo?.title || 'No title'} 
                />
                <h2>{book.volumeInfo?.title || 'No title'}</h2>
                <p>{book.volumeInfo?.authors?.join(', ') || 'No authors'}</p>
                <p className="book-price">
                  {book.saleInfo?.listPrice ? `$${book.saleInfo.listPrice.amount}` : 'Price not available'}
                </p>
              </Link>
            ))
          ) : (
            <p>No books available with price.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryBooksPage;
