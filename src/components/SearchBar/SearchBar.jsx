import React from 'react';
import './SearchBar.css';

function SearchBar () {
  return (
    <div className="search-bar">
      <select className="game-select">
        <option value="">Select a game</option>
      </select>
      <input type="text" className="search-input" placeholder="Search" />
      <div className="filter-options">
        <button className="filter-button">Price</button>
        <button className="filter-button">Item Type</button>
      </div>
    </div>
  );
};

export default SearchBar;
