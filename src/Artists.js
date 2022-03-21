import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import store from "./store";

const destroy = async (artist) => {
  await axios.delete(`/api/artists/${artist.id}`);
  store.dispatch({ type: "DESTROY_ARTIST", artist });
};

const Artists = ({ artists }) => {
  return (
    <ul>
      {artists.map((artist) => {
        return (
          <li>
            {artist.name} -- {artist.period} --
            <button onClick={() => destroy(artist)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default connect((state) => state)(Artists);
