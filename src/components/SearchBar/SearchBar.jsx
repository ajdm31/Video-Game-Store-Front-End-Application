import React from 'react';
import './SearchBar.css';
import swordIcon from '../../assets/sword-svgrepo-com.svg';
import searchIcon from '../../assets/game-svgrepo-com.svg';
import coinIcon from '../../assets/coin-circle-svgrepo-com.svg';
import controllerIcon from '../../assets/console-game-svgrepo-com.svg';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <h1 className="search-title">Buy The Legend of Zelda Items</h1>
      <div className="search-bar">
        <div className="game-select-container">
          <img src={swordIcon} alt="game" className="game-icon-search" />
          <select className="game-select">
            <option value="">Select a game</option>
          </select>
        </div>
        <div className="search-input-container">
          <img src={searchIcon} alt="game" className="game-icon-search" />
          <input type="text" className="search-input" placeholder="Search" />
          <div className="filter-options">
            <button className="filter-button">
              <img src={coinIcon} alt="game" className="game-icon-search" />Price<i className="icon arrow-down-icon"></i>
            </button>
            <button className="filter-button">
              <img src={controllerIcon} alt="game" className="game-icon-search" />Item Type<i className="icon arrow-down-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
