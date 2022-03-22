import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

const Museums = ({ museums }) => {
  return (
    <ul>
      {museums.map((museum) => {
        return <li key={museum.id}><Link to={`/museums/${museum.id}`}> {museum.name}</Link></li>;
      })}
    </ul>
  );
};

export default connect((state) => state)(Museums);
