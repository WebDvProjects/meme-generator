function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="top statement" type="text" placeholder="Top Text" />
      <input
        className="bottom statement"
        type="text"
        placeholder="Bottom Text"
      />
      <button type="submit" className="form--btn">
        Create a new meme Image 🖼
      </button>
    </form>
  );
}

function Meme() {
  return (
    <div className="meme">
      <img
        className="meme--img"
        src="https://i.imgflip.com/1bij.jpg"
        alt="meme"
      />
      <h2 className="meme--text top">Top text</h2>
      <h2 className="meme--text bottom">Bottom text</h2>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content">
      <Form />
      <Meme />
    </div>
  );
}
