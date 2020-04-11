import React from "react";
import gif from "../../imgs/2.gif";

const GifTwo = () => {
  return (
    <div>
      {console.log("The gif should be appearing")}
      <img src={gif} alt='Colorful Gif' />
    </div>
  );
};

export default GifTwo;
