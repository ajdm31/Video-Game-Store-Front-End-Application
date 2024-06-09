
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import items from "./items";


function App() {

  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    setItemsArray(items); // Initialize the itemsArray state with data from items.js
  }, []);

  
  
  return (
    <div>
      <Navbar/>
      <SearchBar />
      
      <h1> Hello World! </h1> 


      <div className="card-grid"> 
      {itemsArray.map((items, index) => (
        <Card
        key={index}
        id={index}
        title={items.title}
        img={items.img}
        gameIcon={items.gameIcon}
        description={items.description}
        price={items.price}
        />
      ))}
      </div>




      
      <Footer/>
    </div>
    
  );
}

export default App;
