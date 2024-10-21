import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

// Fetch books from Google Books API, filtering for paid eBooks
export const fetchBooksFromGoogle = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        filter: 'paid-ebooks', // Filter for paid eBooks
        key: API_KEY
      }
    });

    const books = response.data.items || [];

    const booksWithPrices = books.map(book => {
      let price = null;
      let currency = null;

      if (book.saleInfo && book.saleInfo.retailPrice) {
        price = book.saleInfo.retailPrice.amount;
        currency = book.saleInfo.retailPrice.currencyCode;
      } else if (book.saleInfo && book.saleInfo.listPrice) {
        price = book.saleInfo.listPrice.amount;
        currency = book.saleInfo.listPrice.currencyCode;
      }

      return {
        ...book,
        saleInfo: {
          ...book.saleInfo,
          price: price ? `${price} ${currency || ''}` : 'Price not available'
        }
      };
    });

    return booksWithPrices;

  } catch (error) {
    console.error('Error fetching books from Google:', error);
    throw error;
  }
};



