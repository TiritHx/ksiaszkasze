import React from "react";

function Tile(props) {
  return (
    <div className="border">
      <p>{props.title}</p>
      <img src={props.src} />
      <p>{props.rating}</p>
    </div>
  );
}

export default Tile;