import React, { useState, useEffect } from "react";
import memesData from "../memesData";

function Meme() {
  // const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2fm6x.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          className="form-inputs"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form-inputs"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image.
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
