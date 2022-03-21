import React from "react";
import {connect} from "react-redux"
  
    const Artists = ({artists}) => {
    return (
      <ul>
        {artists.map((artist) => {
          return <li>{artist.name}</li>;
        })}
      </ul>
    )
  }

export default connect(state=>state)(Artists);
