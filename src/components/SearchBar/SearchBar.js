// Created by Adam Simcoe - 101442161
// Last Updated - November 28th, 2024

import React, { useState } from "react";

// Component for searching up weather data by city
const SearchBar = ({onSearch, errorMessage}) => {

    // State to store user input
    const [city, setCity] = useState('');

    // function to search via user input
    const handleSearch = () => {
        
        // Check to make sure the search field isnt empty
        if (city) {
            onSearch(city);
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a City"
            />
            <button onClick={handleSearch}>Search</button>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default SearchBar;