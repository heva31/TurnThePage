// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import HeroSection from '../components/HeroSection';
// // // // import SearchBar from '../components/SearchBar';
// // // // import FeaturedBooks from '../components/FeaturedBooks';
// // // // import SearchResults from '../components/SearchResults'; // Import the SearchResults component
// // // // import Categories from '../components/Categories';
// // // // import Footer from '../components/Footer';
// // // // import { fetchBooksFromGoogle } from '../services/bookService'; // Import the service function
// // // // import '../styles/HomePage.css';

// // // // const HomePage = () => {
// // // //   const [featuredBooks, setFeaturedBooks] = useState([]);
// // // //   const [searchResults, setSearchResults] = useState([]);
// // // //   const [categories, setCategories] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchFeaturedBooks = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://127.0.0.1:8000/api/books/');
// // // //         setFeaturedBooks(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching featured books:', error);
// // // //       }
// // // //     };

// // // //     const fetchCategories = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://127.0.0.1:8000/api/categories/');
// // // //         setCategories(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching categories:', error);
// // // //       }
// // // //     };

// // // //     fetchFeaturedBooks();
// // // //     fetchCategories();
// // // //   }, []);

// // // //   const handleSearch = async (query) => {
// // // //     if (query) {
// // // //       try {
// // // //         const results = await fetchBooksFromGoogle(query);
// // // //         setSearchResults(results);
// // // //       } catch (error) {
// // // //         console.error('Error searching books:', error);
// // // //         setSearchResults([]);
// // // //       }
// // // //     } else {
// // // //       setSearchResults([]);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <HeroSection />
// // // //       <SearchBar onSearch={handleSearch} />


      
// // // //       {/* Search Results Section */}
// // // //       {searchResults.length > 0 && (
// // // //         <SearchResults books={searchResults} />
// // // //       )}

// // // //       {/* Featured Books Section */}
// // // //       <section className="featured-books-section">
// // // //         {/* <h2>Featured Books</h2> */}
// // // //         <FeaturedBooks books={featuredBooks} />
// // // //       </section>


// // // //       <Categories categories={categories} />
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;



// // // // src/pages/HomePage.js
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import HeroSection from '../components/HeroSection';
// // // import SearchBar from '../components/SearchBar';
// // // import FeaturedBooks from '../components/FeaturedBooks';
// // // import SearchResults from '../components/SearchResults';
// // // import Categories from '../components/Categories';
// // // import Footer from '../components/Footer';
// // // import { fetchBooksFromGoogle } from '../services/bookService';
// // // import '../styles/HomePage.css';

// // // const HomePage = () => {
// // //     const [featuredBooks, setFeaturedBooks] = useState([]);
// // //     const [searchResults, setSearchResults] = useState([]);
// // //     const [categories, setCategories] = useState([]);
// // //     const [userName, setUserName] = useState('');

// // //     useEffect(() => {
// // //         const fetchFeaturedBooks = async () => {
// // //             try {
// // //                 const response = await axios.get('http://127.0.0.1:8000/api/books/');
// // //                 setFeaturedBooks(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching featured books:', error);
// // //             }
// // //         };

// // //         const fetchCategories = async () => {
// // //             try {
// // //                 const response = await axios.get('http://127.0.0.1:8000/api/categories/');
// // //                 setCategories(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching categories:', error);
// // //             }
// // //         };

// // //         fetchFeaturedBooks();
// // //         fetchCategories();

// // //         // Get user name from local storage
// // //         const user = JSON.parse(localStorage.getItem('user'));
// // //         if (user) {
// // //             setUserName(user.username);
// // //         }
// // //     }, []);

// // //     const handleSearch = async (query) => {
// // //         if (query) {
// // //             try {
// // //                 const results = await fetchBooksFromGoogle(query);
// // //                 setSearchResults(results);
// // //             } catch (error) {
// // //                 console.error('Error searching books:', error);
// // //                 setSearchResults([]);
// // //             }
// // //         } else {
// // //             setSearchResults([]);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <HeroSection />
// // //             <SearchBar onSearch={handleSearch} />

// // //             {/* Display user greeting */}
// // //             {userName && (
// // //                 <div className="user-greeting">
// // //                     <h2>Hello, {userName}</h2>
// // //                 </div>
// // //             )}

// // //             {/* Search Results Section */}
// // //             {searchResults.length > 0 && (
// // //                 <SearchResults books={searchResults} />
// // //             )}

// // //             {/* Featured Books Section */}
// // //             <section className="featured-books-section">
// // //                 <FeaturedBooks books={featuredBooks} />
// // //             </section>

// // //             <Categories categories={categories} />
// // //             <Footer />
// // //         </div>
// // //     );
// // // };

// // // export default HomePage;




// // // src/pages/HomePage.js

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import HeroSection from '../components/HeroSection';
// // import SearchBar from '../components/SearchBar';
// // import FeaturedBooks from '../components/FeaturedBooks';
// // import SearchResults from '../components/SearchResults';
// // import Categories from '../components/Categories';
// // import Footer from '../components/Footer';
// // import { fetchBooksFromGoogle } from '../services/bookService';
// // import '../styles/HomePage.css';

// // const HomePage = () => {
// //     const [featuredBooks, setFeaturedBooks] = useState([]);
// //     const [searchResults, setSearchResults] = useState([]);
// //     const [categories, setCategories] = useState([]);
// //     const [userName, setUserName] = useState('');

// //     useEffect(() => {
// //         const fetchFeaturedBooks = async () => {
// //             try {
// //                 const response = await axios.get('http://127.0.0.1:8000/api/books/');
// //                 setFeaturedBooks(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching featured books:', error);
// //             }
// //         };

// //         const fetchCategories = async () => {
// //             try {
// //                 const response = await axios.get('http://127.0.0.1:8000/api/categories/');
// //                 setCategories(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching categories:', error);
// //             }
// //         };

// //         fetchFeaturedBooks();
// //         fetchCategories();

// //         // Get user name from local storage
// //         const user = JSON.parse(localStorage.getItem('user'));
// //         if (user) {
// //             setUserName(user.username);
// //         }
// //     }, []);

// //     const handleSearch = async (query) => {
// //         if (query) {
// //             try {
// //                 const results = await fetchBooksFromGoogle(query);
// //                 setSearchResults(results);
// //             } catch (error) {
// //                 console.error('Error searching books:', error);
// //                 setSearchResults([]);
// //             }
// //         } else {
// //             setSearchResults([]);
// //         }
// //     };

// //     return (
// //         <div>
// //             <HeroSection />
// //             <SearchBar onSearch={handleSearch} />

// //             {/* Display user greeting */}
// //             {userName && (
// //                 <div className="user-greeting">
// //                     <h2>Hello, {userName}</h2>
// //                 </div>
// //             )}

// //             {/* Search Results Section */}
// //             {searchResults.length > 0 && (
// //                 <SearchResults books={searchResults} />
// //             )}

// //             {/* Featured Books Section */}
// //             <section className="featured-books-section">
// //                 <FeaturedBooks books={featuredBooks} />
// //             </section>

// //             <Categories categories={categories} />
// //             <Footer />
// //         </div>
// //     );
// // };

// // export default HomePage;








// // src/pages/HomePage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import HeroSection from '../components/HeroSection';
// import SearchBar from '../components/SearchBar';
// import FeaturedBooks from '../components/FeaturedBooks';
// import SearchResults from '../components/SearchResults';
// import Categories from '../components/Categories';
// import Footer from '../components/Footer';
// import { fetchBooksFromGoogle } from '../services/bookService';
// import '../styles/HomePage.css';

// const HomePage = () => {
//     const [featuredBooks, setFeaturedBooks] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [userName, setUserName] = useState('');

//     useEffect(() => {
//         // Fetch featured books and categories
//         const fetchFeaturedBooks = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/books/');
//                 setFeaturedBooks(response.data);
//             } catch (error) {
//                 console.error('Error fetching featured books:', error);
//             }
//         };

//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/categories/');
//                 setCategories(response.data);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             }
//         };

//         fetchFeaturedBooks();
//         fetchCategories();

//         // Get user name from local storage
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (user) {
//             setUserName(user.username);
//         }
//     }, []);

//     const handleSearch = async (query) => {
//         if (query) {
//             try {
//                 const results = await fetchBooksFromGoogle(query);
//                 setSearchResults(results);
//             } catch (error) {
//                 console.error('Error searching books:', error);
//                 setSearchResults([]);
//             }
//         } else {
//             setSearchResults([]);
//         }
//     };

//     return (
//         <div>
//             <HeroSection />
//             <SearchBar onSearch={handleSearch} />

//             {/* Display user greeting */}
//             {userName && (
//                 <div className="user-greeting">
//                     <h2>Hello, {userName}</h2>
//                 </div>
//             )}

//             {/* Search Results Section */}
//             {searchResults.length > 0 && (
//                 <SearchResults books={searchResults} />
//             )}

//             {/* Featured Books Section */}
//             <section className="featured-books-section">
//                 <FeaturedBooks books={featuredBooks} />
//             </section>

//             <Categories categories={categories} />
//             <Footer />
//         </div>
//     );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchBar from '../../components/SearchBar/SearchBar';
import FeaturedBooks from '../../components/FeaturedBooks/FeaturedBooks';
import SearchResults from '../../components/SearchResults/SearchResults';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Testimonials from '../../components/Testimonials/Testimonials';
import AuthorSpotlights from '../../components/AuthorSpotlights/AuthorSpotlights'; // Adjust the path as needed


import { fetchBooksFromGoogle } from '../../services/bookService';
import './HomePage.css';

const HomePage = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [categories, setCategories] = useState([]);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFeaturedBooks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/books/');
                setFeaturedBooks(response.data);
            } catch (error) {
                console.error('Error fetching featured books:', error);
                setError('Error fetching featured books');
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Error fetching categories');
            }
        };

        // Fetch data and update state
        const fetchData = async () => {
            await Promise.all([fetchFeaturedBooks(), fetchCategories()]);
            setLoading(false);
        };

        fetchData();

        // Get user name from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserName(user.username);
        } else {
            setUserName(''); // Reset userName if no user data
        }
    }, []);

    const handleSearch = async (query) => {
        if (query) {
            try {
                const results = await fetchBooksFromGoogle(query);
                setSearchResults(results);
            } catch (error) {
                console.error('Error searching books:', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUserName(''); // Clear username from state
        // Redirect to login page or home page
        window.location.href = '/login'; // Adjust as needed
    };

    return (
        <div>
            <HeroSection />
            <Categories categories={categories} />
            
            <SearchBar onSearch={handleSearch} />

            {/* Display user greeting */}
            {userName && (
                <div className="user-greeting">
                    <h2>Hello, {userName}</h2>
                    <button onClick={handleLogout}>Logout</button> {/* Add logout button */}
                </div>
            )}

            {/* Display loading or error messages */}
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            {/* Search Results Section */}
            {searchResults.length > 0 && (
                <SearchResults books={searchResults} />
            )}

            {/* Featured Books Section */}
            <section className="featured-books-section">
                <FeaturedBooks books={featuredBooks} />
            </section>
            {/* Spotlight Books Section */}

            <section>
            <AuthorSpotlights />
            </section>
            {/* Testimonials Books Section */}

            <section>
            <Testimonials />
            </section>
           

  </div>
    );
};

export default HomePage;
