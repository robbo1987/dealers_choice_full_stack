import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Artists from "./Artists";
import Museums from "./Museums";
import store from "./store"

class App extends React.Component {
  

  async componentDidMount() {
    const artists = await axios.get("/api/artists");
    store.dispatch({type:"LOAD_ARTISTS",artists:artists.data})
    const museums = await axios.get("/api/museums");
    store.dispatch({type:"LOAD_MUSEUMS", museums:museums.data})
  }

  render() {
    return (
      <div>
        <h1>Welcome to Robby's Italian Art Tour Guide Site</h1>
        <h2>Here is my list of "TOP TIER" Italian Artists</h2>
          <Artists />
        <h2>Museums to view their works</h2>
        <Museums />
      </div>
    );
  }
}
render(<App />, document.querySelector("#root"));
