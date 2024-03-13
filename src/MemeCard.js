import React from "react";
import './index.css';
const MemeCard = ({ data }) => {
  const { url, title } = data;
  //console.log("data", data, url);
  
  return (
    <div className="p-5 m-5 border border-black  rounded-lg">
      <img className="h-64 w-64" alt="meme" src={url} />
      <p>{title}</p>
    </div>
  );
};



export default MemeCard;
