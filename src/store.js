import {createStore} from "redux"
const LOAD_ARTISTS = "LOAD_ARTISTS"

const reducer = (state= {artists:[],museums:[]},action) => {
    if(action.type===LOAD_ARTISTS) {
        state = {...state, artists:action.artists}
    }
    
    return state
} 

const store = createStore(reducer)

export default store
