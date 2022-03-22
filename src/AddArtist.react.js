import React, {component} from "react"
import axios from "axios"
import store from "./store"
import {connect} from "react-redux"

class AddArtist extends React.Component{
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }
    render(){
        const {name} = this.state
        return(
            <form onSubmit={()=> {}}>
                <input 
                placeholder="add your favorite artist"
                value = {name} 
                onChange = {(ev)=> this.setState({name: ev.target.value})}/>
                
                <button type="submit" className="add">
                    Add Artist
                </button>
            </form>
        )
    }
}


export default connect((state) => state)(AddArtist);