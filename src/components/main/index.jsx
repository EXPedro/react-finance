import React from "react";
import './Main.css';
import Padlock from "../padlock";
import Card from "../card"

const Main = () => {
  return(
    <>
    <div className="main">
      <Padlock />
      <Card />
    </div>  
    </>
  )
};

export default Main;