import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = ({ artists, museums }) => {
  return (
    <div id="nav">
      <nav>
        <Link to="/Home">Home </Link>
        <Link to="/Artists"> Artists ({artists.length}) </Link>
        <Link to="/Museums"> Museums ({museums.length})</Link>
      </nav>
    </div>
  );
};

export default connect((state) => state)(Nav);
