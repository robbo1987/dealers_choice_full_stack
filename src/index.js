import axios from "axios";
import React from "react";
import { render } from "react-dom";
import Body from "./Artist";
import store from "./store";
import { Provider, connect } from "react-redux";

const App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootstrap: async () => {
        const artists = await axios.get("/api/artists");
        dispatch({ type: "LOAD_ARTIST", artists });
      },
    };
  }
)(
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
      this.setState({ artists: artistsData });
    }

    render() {
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
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
