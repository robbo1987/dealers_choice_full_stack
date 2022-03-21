import { createStore } from "redux";
const LOAD_ARTISTS = "LOAD_ARTISTS";
const LOAD_MUSEUMS = "LOAD_MUSEUMS";

const reducer = (state = { artists: [], museums: [] }, action) => {
  if (action.type === LOAD_ARTISTS) {
    state = { ...state, artists: action.artists };
  }
  if (action.type === LOAD_MUSEUMS) {
    state = { ...state, museums: action.museums };
  }

  return state;
};

const store = createStore(reducer);

export default store;
