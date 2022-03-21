import React from "react";
import { render } from "react-dom";
import Artists from "./Artists.react";
import Museums from "./Museums.react";
import Nav from "./Nav.react";
import store, { loadArtists, loadMuseums } from "./store";
import { Provider, connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

const Detail = connect((state) => state)((props) => {
  const artist = props.artists.find(
    (artist) => artist.id === props.match.params.id * 1
  );
  if (!artist) {
    return null;
  }
  return (
    <div>
      {artist.name} - {artist.period}
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
          <Nav />
          <h1>Welcome to Robby's Italian Art Tour Guide Site</h1>
          <h2>Here is my list of "TOP TIER" Italian Artists</h2>
          <Route path="/Artists/:id" component={Detail} />
          <Artists />
          <h2>Museums to view their works</h2>
          <Museums />
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
