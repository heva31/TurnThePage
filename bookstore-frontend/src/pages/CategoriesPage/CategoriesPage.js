// // src/pages/CategoriesPage.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // For navigation
// import axios from 'axios';
// import './CategoriesPage.css';

// const CategoriesPage = () => {
//     const [categories, setCategories] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/categories/');
//                 setCategories(response.data);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//                 setError('Failed to load categories');
//             }
//         };

//         fetchCategories();
//     }, []);

//     return (
//         <div className="categories-page">
//             <h1>Book Categories</h1>
//             {error && <p className="error-message">{error}</p>}
//             <div className="categories-list">
//                 {categories.map((category) => (
//                     <div key={category.id} className="category-item">
//                         <Link to={`/categories/${category.id}`}>
//                             <h2>{category.name}</h2>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategoriesPage;





// // src/pages/CategoriesPage.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './CategoriesPage.css';

// const googleBooksApiKey = 'YOUR_GOOGLE_BOOKS_API_KEY';

// const CategoriesPage = () => {
//     const [categories] = useState([
//         { id: 'fiction', name: 'Fiction' },
//         { id: 'nonfiction', name: 'Non-Fiction' },
//         { id: 'mystery', name: 'Mystery' },
//         { id: 'romance', name: 'Romance' },
//         { id: 'scifi', name: 'Science Fiction' },
//         { id: 'fantasy', name: 'Fantasy' },
//         { id: 'thriller', name: 'Thriller' }
//     ]);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [books, setBooks] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (selectedCategory) {
//             const fetchBooks = async () => {
//                 try {
//                     const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&key=${googleBooksApiKey}`);
//                     setBooks(response.data.items || []);
//                 } catch (error) {
//                     console.error('Error fetching books:', error);
//                     setError('Failed to load books for this category');
//                 }
//             };

//             fetchBooks();
//         }
//     }, [selectedCategory]);

//     const handleCategoryClick = (categoryId) => {
//         setSelectedCategory(categoryId);
//     };

//     return (
//         <div className="categories-page">
//             <h1>Book Categories</h1>
//             {error && <p className="error-message">{error}</p>}

//             {/* Categories List */}
//             <div className="categories-list">
//                 {categories.map((category) => (
//                     <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.id)}>
//                         <h2>{category.name}</h2>
//                     </div>
//                 ))}
//             </div>

//             {/* Dynamic Banner and Books List */}
//             {selectedCategory && (
//                 <>
//                     <div className="dynamic-banner">
//                         <h2>Books in {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
//                         <p>Discover the latest and greatest books in {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</p>
//                     </div>

//                     <div className="books-list">
//                         {books.length > 0 ? (
//                             books.map((book) => (
//                                 <div key={book.id} className="book-item">
//                                     <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
//                                     <h3>{book.volumeInfo.title}</h3>
//                                     <p>{book.volumeInfo.authors?.join(', ')}</p>
//                                     <Link to={`/books/${book.id}`}>View Details</Link>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No books available for this category.</p>
//                         )}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CategoriesPage;




// src/pages/CategoriesPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios';
import './CategoriesPage.css';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to load categories');
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryName) => {
        // Navigate to the new route with the category name
        navigate(`/categories/${categoryName}`);
    };

    return (
        <div className="categories-page">
            <h1>Book Categories</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="categories-list">
                {categories.map((category) => (
                    <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.name)}>
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
