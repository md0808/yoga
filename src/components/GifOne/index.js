import React from "react";
import gif from "../../imgs/1.gif";
import "./styles.css";

const GifOne = () => {
  return (
    <div class='g1'>
      {console.log("The gif should be appearing")}
      <img src={gif} alt='Colorful Gif' />
    </div>
  );
};

export default GifOne;
