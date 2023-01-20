import { Skeleton } from "@mui/material";

export default function Meme(props) {
  return (
    /* render img only if meme object is valid */
    !!props.url ? (
      <div className="meme">
        <img className="meme--img" src={props.url} alt="meme" />
        <h2 className="meme--text top">{props.topText}</h2>
        <h2 className="meme--text bottom">{props.bottomText}</h2>
      </div>
    ) : (
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            background: "linear-gradient(90deg, pink, var(--theme-color))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            visibility: "visible",
          }}
          key={"no-meme"}>
          No Meme
        </div>
      </Skeleton>
    )
  );
}
