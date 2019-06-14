import React, { Component } from 'react';
import axios from 'axios';

export default class SmurfDelete extends Component {
  constructor(props) {
    super(props);
    this.idToDelete = React.createRef();
  }

  deleteSmurf = () => {
    axios.delete(`http://localhost:3333/smurfs/${this.idToDelete.current.value}`)
      .then(() => this.props.cb);
  };

  render() {
    return (
      <form onSubmit={this.deleteSmurf}>
        <input placeholder='id' ref={this.idToDelete} />
       < button type="submit">Delete from the village</button>
      </form>
    );
  }
}