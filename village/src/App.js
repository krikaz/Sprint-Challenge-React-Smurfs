import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import Smurfs from './components/Smurfs';
import SmurfForm from './components/SmurfForm';
import SmurfDelete from './components/SmurfDelete';
import SmurfUpdate from './components/SmurfUpdate';
import axios from 'axios';

import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;

	margin-top: 2rem;
	margin-bottom: 2rem;

	font-size: 2rem;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		this.fetchSmurfs();
	}

	componentDidUpdate() {
		this.fetchSmurfs();
	}

	fetchSmurfs = () => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => this.setState({ smurfs: res.data }));
	};

	render() {
		return (
			<Router>
				<div className="App">
					<StyledNav>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/smurf-form">Add</NavLink>
						<NavLink to="/smurf-delete">Delete</NavLink>
						<NavLink to="/smurf-update">Update</NavLink>
					</StyledNav>

					<Route
						exact
						path="/"
						render={() => <Smurfs smurfs={this.state.smurfs} />}
					/>
					<Route path="/smurf-form" render={() => <SmurfForm />} />
					<Route path="/smurf-delete" render={() => <SmurfDelete />} />
					<Route path="/smurf-update" render={() => <SmurfUpdate />} />
				</div>
			</Router>
		);
	}
}

export default App;
