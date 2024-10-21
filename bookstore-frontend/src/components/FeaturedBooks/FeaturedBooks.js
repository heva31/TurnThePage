// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FeaturedBooks.css'; // Ensure this CSS file is correct

// const FeaturedBooks = ({ books }) => {
//   return (
//     <section className="featured-books-section">
//       <h2>Featured Books</h2>
//       <div className="books-container">
//         {books.length > 0 ? (
//           books.map(book => (
//             <div className="book-card" key={book.id}>
              
//               <h3>{book.title}</h3>
//               <p>Author: {book.author}</p>
//               <p>Price: ${book.price}</p>
//               {book.cover_image_url && 
//                 <img src={book.cover_image_url} alt={book.title} />}
//               <Link to={`/book/${book.id}`}>View Details</Link>
//             </div>
//           ))
//         ) : (
//           <p className="no-books-message">No books available</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedBooks;



// src/components/FeaturedBooks.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedBooks.css'; // Ensure this CSS file is correct
import AddToCartButton from '../AddToCartButton';  // Adjust the path if needed
import AddToWishlistButton from '../AddToWishlistButton'; const FeaturedBooks = ({ books }) => {
  return (
    <section className="featured-books-section">
      <h2><u>Featured Books</u></h2>
      <div className="books-container">
        {books.length > 0 ? (
          books.map(book => (
            <Link to={`/book/${book.id}`} className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              {book.cover_image_url && 
                <img src={book.cover_image_url} alt={book.title} />}
                {/* <AddToCartButton bookId={book?.id} /> */}
                <AddToCartButton className="add-to-cart-btn" bookId={book.id} />
<AddToWishlistButton className="add-to-wishlist-btn" bookId={book.id} />
</Link>
          ))
        ) : (
          <p className="no-books-message">No books available</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedBooks;
