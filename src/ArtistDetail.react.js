import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const ArtistDetail = (props) => {
  
    const artist = props.artists.find(
      (artist) => artist.id === props.match.params.id * 1
    );
    if (!artist) {
      return null;
    }

    return (
      <div>
        <Link to="/Artists"> Back to Artists Page </Link>
      <li>
        {artist.name} was an Italian Artist from the {artist.period} Period. He
        was born {artist.birthday} in Italy.
      </li>
      
      
      
      </div>
    );
  };

  export default connect(state=>state)(ArtistDetail)