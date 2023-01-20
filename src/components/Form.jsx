export default function Form(props) {
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
