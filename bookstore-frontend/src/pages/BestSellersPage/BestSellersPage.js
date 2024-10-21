// src/pages/BestSellersPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BestSellersPage.css';

const BestSellersPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        // Fetch bestsellers using Google Books API
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40'
        );

        // Filter out books without price info
        const bestSellingBooks = response.data.items.filter(
          book => book.saleInfo?.listPrice
          
        );

        setBooks(bestSellingBooks);
      } catch (error) {
        console.error('Error fetching bestsellers:', error);
        setError('Failed to load bestsellers.');
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div className="best-sellers-page">
      <h1>Best Sellers</h1>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading bestsellers...</p>
      ) : (
        <div className="books-list">
          {books.length > 0 ? (
            books.map((book) => (
              <Link to={`/book/${book.id}`} key={book.id} className="book-item">
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
            <p>No bestsellers available with price information.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BestSellersPage;
