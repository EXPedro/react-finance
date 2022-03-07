import React from "react";
import './Card.css';

const Card = () => {
  return(
    <>
      <div className="card">        
        <p className="ticker no-margins">ITSA4</p>
        <p className="quantidade no-margins">351</p>
        <p className="pm no-margins">R$ </p>
        <p className="atual no-margins">R$ </p>
        <p className="endline no-margins">12.03 %</p>
      </div>
    </>
  )
};

export default Card;