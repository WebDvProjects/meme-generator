import { useState } from "react";
import memesData from "../meme-data";

function Form(props) {
  return (
    <div className="form">
      <input
        className="top statement"
        type="text"
        name="topText"
        value={props.topText}
        placeholder="Top Text"
        onChange={props.handleInputChange}
      />
      <input
        className="bottom statement"
        type="text"
        name="bottomText"
        value={props.bottomText}
        placeholder="Bottom Text"
        onChange={props.handleInputChange}
      />
      <button type="button" className="form--btn" onClick={props.handleClick}>
        Create a new meme Image 🖼
      </button>
    </div>
  );
}

function Meme(props) {
  return (
    <div className="meme" data-has-meme={!!props.url}>
      {/* render img only if meme object is valid */}
      {!!props.url && <img className="meme--img" src={props.url} alt="meme" />}
      <h2 className="meme--text top">{props.topText}</h2>
      <h2 className="meme--text bottom">{props.bottomText}</h2>
    </div>
  );
}

export default function Content() {
  const [allMemes, setAllMemes] = useState(memesData);
  const [meme, setMeme] = useState({
    // default object state
    topText: "Top text",
    bottomText: "Bottom text",
    url: "https://i.imgflip.com/1bij.jpg",
  });

  function getMeme() {
    const randIndx = Math.floor(Math.random() * allMemes.length);
    const randomMemeUrl = allMemes[randIndx].url;
    setMeme((meme) => ({ ...meme, url: randomMemeUrl }));
    console.log(meme);
  }

  function handleInputChange(e) {
    const { name, value, type } = e.target;
    setMeme((prevMemeInfo) => ({
      ...prevMemeInfo,
      [name]: value,
    }));
  }

  return (
    <main className="content">
      <Form
        topText={meme.topText}
        bottomText={meme.bottomText}
        handleClick={getMeme}
        handleInputChange={handleInputChange}
      />
      <Meme {...meme} />
    </main>
  );
}
