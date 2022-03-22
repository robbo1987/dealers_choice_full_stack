import React from "react";
import { addArtist } from "./store";
import { connect } from "react-redux";

class AddArtist extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.add(this.state.name);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }
  render() {
    const { name} = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} placeholder="name" onChange={handleChange} />
        {!name ? <button disabled>Create New Artist</button> : <button>Create New Artist</button>}
      </form>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    add: (name,) => {
      dispatch(addArtist(name));
    },
  };
})(AddArtist);
