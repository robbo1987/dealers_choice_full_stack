import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import store from "./store";


const Artists = ({ artists, destroy }) => {
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

const mapDispatch = (dispatch) => {
    return {
      destroy: async (artist) => {
      await axios.delete(`/api/artists/${artist.id}`);
      dispatch({ type: "DESTROY_ARTIST", artist });
     }
    }
  }

export default connect((state) => state,mapDispatch)(Artists);
