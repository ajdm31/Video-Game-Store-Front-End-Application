import React, { useState } from 'react';
import './Card.css';
import { FaShoppingCart, FaArrowUp, FaArrowDown } from 'react-icons/fa';

function Card({title,img,gameIcon,price, description}) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrement(){
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function handleDecrement() {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }

    function handleChange (e) {
        const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : value);
    };


    return (
        <div className="card">
          <div className="card-top">
            <div className="card-status">
              <div className="card-sale">
                <span className="green-dot"></span> On Sale 
              </div>
              <div className="card-stock">In Stock</div>
            </div>
            <div className="card-quantity">
              <input
                type="number"
                value={quantity}
                onChange={handleChange}
                className="quantity-input"
              />
              <div className="quantity-controls">
                <button onClick={handleIncrement}><FaArrowUp /></button>
                <button onClick={handleDecrement}><FaArrowDown /></button>
              </div>
            </div>
          </div>
          <div className="card-image-container">
            <img src={img} alt="item" className="card-image" />
          </div>
          <div className="card-info">
            <div className="card-text">
              <h3 className="card-title">{title}</h3>
              <p className="card-price">{price}</p>
            </div>
            <img src={gameIcon} alt="game" className="game-icon" />
          </div>
          <div className="card-description">
            {description}
          </div>
          <div className="card-buttons">
            <button className="details-button">Details</button>
            <button className="add-button">
              Add <FaShoppingCart className="shopping-cart-icon" />
            </button>
          </div>
        </div>
      );
    }

export default Card;