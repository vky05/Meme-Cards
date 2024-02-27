import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Abc from "./abc";
import "./index.css";
import Shimmer from "./Shimmer";
const Body = (props) => {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const jsonData = await data.json();
    setMemes(jsonData.memes);
    // console.log("json", jsonData);
  };

  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, index) => <MemeCard key={index} data={meme} />)
      )}
    </div>
  );
};
export default Body;
