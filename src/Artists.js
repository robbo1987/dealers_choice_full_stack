import React from "react";

const Artists = ({ artists }) => {
  return (
    <ul>
      {artists.map((artist) => {
        return <li> {artist.name} </li>;
      })}
    </ul>
  );
};

export default Artists;
