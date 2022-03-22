import { createStore, applyMiddleware, combineReducers } from "redux";
const LOAD_ARTISTS = "LOAD_ARTISTS";
const LOAD_MUSEUMS = "LOAD_MUSEUMS";
const DESTROY_ARTIST = "DESTROY_ARTIST";
const ADD_ARTIST = "ADD_ARTIST"
import axios from "axios";
import thunk from "redux-thunk";

const artistReducer = (state = [], action) => {
  if (action.type === LOAD_ARTISTS) {
    state = action.artists;
  }
  if (action.type === DESTROY_ARTIST) {
    const artists = state.filter((artist) => artist.id !== action.artist.id);
    state = artists;
    return state;
  }
  if(action.type === ADD_ARTIST) {
    const artist = [...state,action.artist]
    return artist
  }

  return state;
};

const museumReducer = (state = [], action) => {
  if (action.type === LOAD_MUSEUMS) {
    state = action.museums;
  }
  return state;
};

const reducer = combineReducers({
  artists: artistReducer,
  museums: museumReducer,
});

export const loadArtists = () => {
  return async (dispatch) => {
    const artists = await axios.get("/api/artists");
    dispatch({ type: LOAD_ARTISTS, artists: artists.data });
  };
};

export const loadMuseums = () => {
  return async (dispatch) => {
    const museums = await axios.get("/api/museums");
    dispatch({ type: LOAD_MUSEUMS, museums: museums.data });
  };
};

export const addArtist = (name) => {
  return async(dispatch) => {
  console.log(name)
  /*const artist = await (axios.post('/api/artists', name)).data
  dispatch({type:ADD_ARTIST,name},artist)*/
  }
}



export const destroy = (artist) => {
  return async(dispatch) => {
  await axios.delete(`/api/artists/${artist.id}`);
  dispatch({ type: DESTROY_ARTIST, artist });
  }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;

//need to add a delete THUNK, Router, forms and then clean up
