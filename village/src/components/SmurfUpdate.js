import React, { Component } from 'react';
import axios from 'axios';

export default class SmurfUpdate extends Component {
  constructor(props) {
    super(props);
    this.idToUpdate = React.createRef();
    this.nameToUpdate = React.createRef();
    this.ageToUpdate = React.createRef();
    this.heightToUpdate = React.createRef();
  }

  updateSmurf = () => {
    const oldSmurf = {
      id: this.idToUpdate.current.value,
      name: this.nameToUpdate.current.value,
      age: this.ageToUpdate.current.value,
      height: this.heightToUpdate.current.value,
    }
    axios.put(`http://localhost:3333/smurfs/${this.idToUpdate.current.value}`, oldSmurf)
      .then(() => this.props.cb);
  };

  render() {
    return (
      <form onSubmit={this.updateSmurf}>
        <input placeholder='id' ref={this.idToUpdate} />
        <input placeholder='name' ref={this.nameToUpdate} />
        <input placeholder='age' ref={this.ageToUpdate} />
        <input placeholder='height' ref={this.heightToUpdate} />
       < button type="submit">Update from the village</button>
      </form>
    );
  }
}