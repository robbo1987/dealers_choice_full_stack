import React from "react";
import { addArtist } from "./store";
import { connect } from "react-redux";

class AddArtist extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birthday:"",
      period:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.add(this.state.name,this.state.birthday,this.state.name);
  }

  handleChange(ev) {
    const change = {}
    change[ev.target.name]=ev.target.value
    this.setState(change);
  }
  render() {
    const { name,birthday,period } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} placeholder="name" onChange={handleChange} />
        <input name="birthday" value={birthday} placeholder="birthday" onChange={handleChange} />
        <input name="period" value={period} placeholder="period"onChange={handleChange} />
        <button>Create new Artist</button>
      </form>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    add: (name,birthday,period) => {
      dispatch(addArtist(name,birthday,period));
    },
  };
})(AddArtist);
