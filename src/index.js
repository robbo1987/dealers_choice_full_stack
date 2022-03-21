import React from "react";
import { render } from "react-dom";
import Artists from "./Artists.react";
import Museums from "./Museums.react";
import store, {loadArtists,loadMuseums} from "./store"
import {Provider,connect} from "react-redux"


const _App = connect(
state => {
  return state;
},
dispatch => {
  return{
    bootstrap: async() => {
      dispatch(loadArtists())
      dispatch(loadMuseums())
    },
  } 
})
(class App extends React.Component {
  componentDidMount() {
    this.props.bootstrap()
    
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
})
render(<Provider store={store}><_App /></Provider>, document.querySelector("#root"));
