import React from 'react';

import Navbar from "./components/Navbar/Navbar";
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar />
      
      <h1> Hello World! </h1> 
      <Card />
      <Footer/>
    </div>
    
  );
}

export default App;
