import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';
import items from "./items";

function App() {

  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    setItemsArray(items);
  }, []);

  return (
    <div className="main-background">
      <Navbar />
      <div className="content-wrapper">
        <SearchBar />
        <div className="main-container">
          <div className="container-header">
            <div className="header-left">
              <p>Showing 15 - from 120</p>
            </div>
            <div className="header-right">
              <select className="sort-options">
                <option value="featured">Sort by: Featured</option>
                
              </select>
            </div>
          </div>
          <div className="card-grid">
            {itemsArray.map((item, index) => (
              <Card
                key={index}
                id={index}
                title={item.title}
                img={item.img}
                gameIcon={item.gameIcon}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
