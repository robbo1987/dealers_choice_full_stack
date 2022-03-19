import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [],
    };
  }


  render() {
    return (
      <div>
          <h1>
              Robby's Italian Fine Art Museum
          </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
