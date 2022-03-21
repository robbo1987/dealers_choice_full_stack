import React from "react"
import store from "./store"

class Museums extends React.Component{
    constructor() {
        super();
        this.state = store.getState()
    }
    componentDidMount() {
        store.subscribe(() => this.setState(store.getState()))
    }

render() {
    const museums = this.state.museums;
    return(
        <ul>
            {museums.map(museum=> {
                return <li>{museum.name}</li>
            })}
        </ul>
    )
  }
}

export default Museums