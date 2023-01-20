export default function Meme(props) {
  return (
    <div className="meme" data-has-meme={!!props.url}>
      {/* render img only if meme object is valid */}
      {!!props.url && <img className="meme--img" src={props.url} alt="meme" />}
      <h2 className="meme--text top">{props.topText}</h2>
      <h2 className="meme--text bottom">{props.bottomText}</h2>
    </div>
  );
}
