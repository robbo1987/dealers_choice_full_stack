import { createStore } from "redux";
const LOAD_ARTIST = "LOAD_ARTIST";
const reducer = (state = [], action) => {
  if (action.type === LOAD_ARTIST) {
    state = { ...state, artists: action.artists };
  }
  return state;
};

const store = createStore(reducer);

export default store;
