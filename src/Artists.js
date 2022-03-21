import React from "react";
import store from "./store";

class Artists extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }
  render() {
    const artists = this.state.artists;
    return (
      <ul>
        {artists.map((artist) => {
          return <li>{artist.name}</li>;
        })}
      </ul>
    );
  }
}

export default Artists;
