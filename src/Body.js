import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import "./index.css";
import Shimmer from "./Shimmer";
const Body = (props) => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    fetchMeme();
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);
//hello vicky
  const handleScroll = () =>{
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight -1){
      console.log("running")
      //setShowShimmer(true);
      fetchMeme();
    }
  }

  const fetchMeme = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const jsonData = await data.json();
    setShowShimmer(false);
    setMemes((memes)=>[...memes, ...jsonData.memes])
  };

  return (
    <div className="flex flex-wrap justify-between">
    
        {memes.map((meme, index) => <MemeCard key={index} data={meme} />)}
        {showShimmer && <Shimmer />}
    </div>
  );
};
export default Body;
