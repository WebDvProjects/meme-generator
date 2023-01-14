import { useState } from "react";
import memes from "../meme-data";

function Form(props) {
  return (
    <div className="form">
      <input className="top statement" type="text" placeholder="Top Text" />
      <input
        className="bottom statement"
        type="text"
        placeholder="Bottom Text"
      />
      <button type="button" className="form--btn" onClick={props.handleClick}>
        Create a new meme Image 🖼
      </button>
    </div>
  );
}

function Meme(props) {
  return (
    <div className="meme" data-has-meme={!!props.meme}>
      {/* render img only if meme object is valid */}
      {!!props.meme && (
        <img className="meme--img" src={props.meme.url} alt="meme" />
      )}
      <h2 className="meme--text top">Top text</h2>
      <h2 className="meme--text bottom">Bottom text</h2>
    </div>
  );
}

export default function Content() {
  const [meme, setMeme] = useState(null);

  function handleClick() {
    const randIndx = Math.floor(Math.random() * memes.length);
    setMeme(memes[randIndx]);
  }

  return (
    <main className="content">
      <Form handleClick={handleClick} />
      <Meme meme={meme} />
    </main>
  );
}
