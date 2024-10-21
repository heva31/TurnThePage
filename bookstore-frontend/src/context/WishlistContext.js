import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWishlistItems } from '../api/api';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const items = await getWishlistItems();
                setWishlistItems(items);
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchWishlist();
    }, []);

    const addItemToWishlist = (item) => {
        setWishlistItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromWishlist = (itemId) => {
        setWishlistItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addItemToWishlist, removeItemFromWishlist, loading }}>
            {children}
        </WishlistContext.Provider>
    );
};
