import React from "react";
import { render } from "react-dom";
import Artists from "./Artists.react";
import Museums from "./Museums.react";
import Header from "./Header.react";
import ArtistDetail from "./ArtistDetail.react";

import store, { loadArtists, loadMuseums } from "./store";
import { Provider, connect } from "react-redux";
import { HashRouter, Route, Link } from "react-router-dom";

const museumDetail = connect((state) => state)((props) => {
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
});

const _App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootstrap: async () => {
        dispatch(loadArtists());
        dispatch(loadMuseums());
      },
    };
  }
)(
  class App extends React.Component {
    componentDidMount() {
      this.props.bootstrap();
    }

    render() {
      return (
        <div>
          <Route path="/" exact component={Header} />

          <Route path="/Artists" exact component={Artists} />

          <Route path="/Artists/:id" exact component={ArtistDetail} />

          <Route path="/Museums" exact component={Museums} />
          <Route path="/Museums/:id" exact component={museumDetail} />
        </div>
      );
    }
  }
);
render(
  <HashRouter>
    <Provider store={store}>
      <_App />
    </Provider>
  </HashRouter>,
  document.querySelector("#root")
);
