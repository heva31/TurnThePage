import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddToCartButton from '../../components/AddToCartButton';
import AddToWishlistButton from '../../components/AddToWishlistButton';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // First try fetching from Django backend
        const localResponse = await axios.get(`http://127.0.0.1:8000/api/books/${id}/`);
        const localData = localResponse.data;

        // Transform the local data to match your component structure
        const bookData = {
          id: localData.id,
          title: localData.title,
          authors: [localData.author], // Assuming author is a single string
          description: localData.description || 'No description available',
          price: localData.price ? `$${localData.price}` : 'Price not available',
          cover_image_url: localData.cover_image_url || 'https://via.placeholder.com/128x196',
        };
        setBook(bookData);
      } catch (localError) {
        console.warn('Local API fetch failed:', localError);
        
        // Fallback to Google Books API
        try {
          const googleResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
          const googleBook = googleResponse.data;

          // Extract price from Google Books API
          let price = 'Price not available';
          const saleInfo = googleBook.saleInfo || {};
          const retailPrice = saleInfo.retailPrice || {};
          const amount = retailPrice.amount;
          const currencyCode = retailPrice.currencyCode;

          if (amount) {
            price = `${currencyCode || 'USD'} ${amount}`;
          } else {
            const listPrice = saleInfo.listPrice || {};
            const listPriceAmount = listPrice.amount;
            const listPriceCurrencyCode = listPrice.currencyCode;

            if (listPriceAmount) {
              price = `${listPriceCurrencyCode || 'USD'} ${listPriceAmount}`;
            }
          }

          // Transform Google Books data to match your local model
          const bookData = {
            id: id,
            title: googleBook.volumeInfo.title,
            authors: googleBook.volumeInfo.authors || ['Unknown author'],
            description: googleBook.volumeInfo.description || 'No description available',
            price: price,
            cover_image_url: googleBook.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x196',
          };
          setBook(bookData);
        } catch (googleError) {
          console.error('Error fetching from Google Books API:', googleError);
          setError('Failed to fetch book details from both APIs.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-detail">
      <img
        src={book?.cover_image_url || 'https://via.placeholder.com/128x196'}
        alt={book?.title || 'No title'}
        className="book-detail-image"
      />
      <h1>{book?.title || 'No title'}</h1>
      <h2>by {book?.authors?.join(', ') || 'Unknown author'}</h2>
      <p dangerouslySetInnerHTML={{ __html: book?.description || 'No description available' }} />
      <p>Price: {book?.price || 'Price not available'}</p>
      <AddToCartButton bookId={book?.id} />
      <AddToWishlistButton bookId={book?.id} />
    </div>
  );
};

export default BookDetailPage;
