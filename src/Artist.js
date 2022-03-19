import React from "react";

const Body = ({ artists }) => {
  return (
    <div>
      <ul>
        {artists.map((artist) => {
          return <li>{artist.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Body;
