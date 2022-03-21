import React from "react";
import { connect } from "react-redux";

const Museums = ({ museums }) => {
  return (
    <ul>
      {museums.map((museum) => {
        return <li key={museum.id}>{museum.name}</li>;
      })}
    </ul>
  );
};

export default connect((state) => state)(Museums);
