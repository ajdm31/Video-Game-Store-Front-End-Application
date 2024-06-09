import React from 'react';
import './Navbar.css';
import logo from "../../assets/chicks-logo-large.svg";
import Cart from "../../assets/shopping-cart-svgrepo-com-white.svg";
import Avatar from "../../assets/avatar-icon.svg";
import DownArrowHead from "../../assets/down-arrow-head.svg"

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="chick gold logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#currency">CURRENCY</a> 
            <img src={DownArrowHead} alt="currency down arrow heard icon" />
          </li>
          <li><a href="#items">ITEMS</a>
          <img src={DownArrowHead} alt="items down arrow heard icon" />
          </li>
          <li><a href="#accounts">ACCOUNTS</a>
          <img src={DownArrowHead} alt="accounts down arrow heard icon" />
          </li>
          <li><a href="#services">SERVICES</a>
          <img src={DownArrowHead} alt="services down arrow heard icon" />
          </li>
          <li><a href="#swap">SWAP</a>
          <img src={DownArrowHead} alt="swap down arrow heard icon" />
          </li>
          <li><a href="#sell">SELL</a>
          <img src={DownArrowHead} alt="sell down arrow heard icon" />
          </li>
        </ul>
        <div className="navbar-options">
          <div className="navbar-currency">
            USD
                <img src={DownArrowHead} alt="languages down arrow heard icon" />
            </div>
          <div className="navbar-cart"> 
            <img src={Cart} alt="shoppoing cart icon" />
            CART (0)
            </div>
        
            <button className="navbar-signin">
            SIGN IN
            <img src={Avatar} className='avatar-icon'/>
            </button>
        </div>
      </nav>

    )
    };


export default Navbar;