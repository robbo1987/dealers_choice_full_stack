import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import axios from "axios";
import Artists from "./Artists";
import Museums from "./Museums";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      museums: [],
    };
  }

  async componentDidMount() {
    const artists = await axios.get("/api/artists");
    const museums = await axios.get("/api/museums");
    this.setState({
      artists: artists.data,
      museums: museums.data,
    });
  }

  render() {
    const artists = this.state.artists;
    const museums = this.state.museums;
    return (
      <div>
        <h1>Welcome to Robby's Italian Art Tour Guide Site</h1>
        <h2>Here is my list of "TOP TIER" Italian Artists</h2>
        <div>
          <Artists artists={artists} />
        </div>
        <h2>Museums to view their works</h2>
        <div>
          <Museums museums={museums} />
        </div>
      </div>
    );
  }
}
render(<App />, document.querySelector("#root"));
