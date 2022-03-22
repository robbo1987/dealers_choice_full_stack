import React, {component} from "react"
import {addArtist} from "./store"
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
            <form onSubmit={(ev)=> {
                console.log(ev); 
                ev.preventDefault();
                this.props.add(this.state.name)
            }}>
                <input 
                placeholder="add your favorite artist"
                value = {name} 
                name = "title"
                onChange = {(ev)=> this.setState({name: ev.target.value})}/>
                
                <button type="submit" className="add" disabled={!name}>
                    Add Artist
                </button>
            </form>
        )
    }
}


export default connect(null, (dispatch) =>{
    return{
        add: (name) => {
            dispatch(addArtist(name))
        }
    }
})(AddArtist);