import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import AddArtist from "./AddArtist.react"

import { Link } from "react-router-dom";

const Artists = ({ artists, destroy }) => {
  return (
    <div>
      
      <Link to= '/'> Back Home </Link>
      <div>
        < AddArtist/>
      </div>
      
    <ul>
      {artists.map((artist) => {
        return (
          <li key={artist.id}>
            <Link to={`/Artists/${artist.id}`}> {artist.name} </Link>
            <button onClick={() => destroy(artist)}>Delete</button>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    destroy: async (artist) => {
      await axios.delete(`/api/artists/${artist.id}`);
      dispatch({ type: "DESTROY_ARTIST", artist });
    },
  };
};

export default connect((state) => state, mapDispatch)(Artists);
