import React from 'react';
import './Pagination.css';

function Pagination (){
  return (
    <div className="pagination">
      <button className="arrow">&lt;</button>
      <button className="page active">1</button>
      <button className="page">2</button>
      <button className="page">3</button>
      <button className="page">4</button>
      <span className="dots">...</span>
      <button className="page">11</button>
      <button className="arrow">&gt;</button>
    </div>
  );
};

export default Pagination;
