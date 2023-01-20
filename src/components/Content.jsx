import { useEffect, useState } from "react";
import memesData from "../meme-data";
import Form from "./Form";
import Meme from "./Meme";

export default function Content() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const { memes } = data.data;
        setAllMemes(() => memes);
        console.log("Memes loaded");
      });
  }, []);

  const [meme, setMeme] = useState({
    // default object state
    topText: "Top text",
    bottomText: "Bottom text",
    url: "https://i.imgflip.com/1ur9b0.jpg",
  });

  function getMeme() {
    if (!allMemes) return;
    const randIndx = Math.floor(Math.random() * allMemes.length);
    const randomMemeUrl = allMemes[randIndx].url;
    setMeme((meme) => ({ ...meme, url: randomMemeUrl }));
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
