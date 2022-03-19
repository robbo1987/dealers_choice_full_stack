import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Body from "./Artist"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [],
    };
  }

  async componentDidMount() {
    const artistsData = (await axios.get("/api/artists")).data;
    console.log("this is the artist data", artistsData);
    this.setState( {artists: artistsData})
  }

  render() {
    console.log("this is the state", this.state);
    return (
      <div>
        <h1>Robby's Italian Fine Art Museum</h1>
        <div>
          <Body artists={this.state.artists} />
        </div>
        <h3>hello world</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
