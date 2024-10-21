import React, { useState } from 'react';
import './SearchBar.css'; // Ensure CSS file is linked

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-section">
            <h1 className="search-heading">Search for Books</h1>
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Enter book title, author, or genre..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
