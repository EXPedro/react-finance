import React from "react";
import './Padlock.css';

const Padlock = () => {
  return(
    <>
    <div className="padlock">
      <img 
        src='./images/cadeado_azul.svg' 
        alt='Cadeado' 
        width='85px' 
        height='auto' 
      />
    </div>  
    </>
  )
};

export default Padlock;