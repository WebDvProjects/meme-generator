import logo from "../../public/meme-logo.png";
export default function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} />
      <p className="header--title">Meme Generator</p>
      <p className="header--subtitle">Create your own memes</p>
    </header>
  );
}
