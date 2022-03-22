import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const MuseumDetail = (props) => {
    const museum = props.museums.find(
      (museum) => museum.id === props.match.params.id * 1
    );
    if (!museum) {
      return null;
    }
    return (
      <div>
        <Link to="/Museums"> Back to Museums Page </Link>
        <li>
          {museum.name} is located at {museum.address}
        </li>
      </div>
    );
  };

  export default connect(state=>state)(MuseumDetail)