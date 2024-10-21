// // import React from 'react';
// // import '../styles/Categories.css'; // Ensure CSS file is linked

// // const Categories = () => {
// //     const categories = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'];
  
// //     return (
// //       <div className="categories">
// //         <h2>Categories</h2>
// //         <div className="categories-list">
// //           {categories.map((category, index) => (
// //             <div key={index} className="category-item">
// //               <h3 className="category-title">{category}</h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default Categories;



// import React from 'react';

// const Categories = ({ categories }) => {
//   return (
//     <section>
//       <h2>Categories</h2>
//       <ul>
//         {categories.length > 0 ? (
//           categories.map(category => (
//             <li key={category.id}>{category.name}</li>
//           ))
//         ) : (
//           <p>No categories available</p>
//         )}
//       </ul>
//     </section>
//   );
// };

// export default Categories;


// src/pages/CategoriesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
        navigate(`/categories/${categoryName}`);
    };

    return (
        <div className="categories-page">
            <div className='new'>
            <h1>Book Categories</h1>
            {error && <p className="error-message">{error}</p>}
            {/* <section className="categories-section"> */}
                <div className="categories-list">
                    {categories.map((category) => (
                        <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.name)}>
                            <h2>{category.name}</h2>
                        </div>
                    ))}
                </div>
            {/* </section> */}
        </div></div>
    );
};

export default Categories;
