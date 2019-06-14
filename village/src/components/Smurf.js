import React from 'react';
// import Route from 'react-router-dom';

const Smurf = props => {
  const uniqueSmurf = 'http://localhost:3000/smurf/' + props.id;

	return (
		<a className="Smurf" href={uniqueSmurf}>
			<div>
				<h3>{props.name}</h3>
				<strong>{props.height} tall</strong>
				<p>{props.age} smurf years old</p>
			</div>
		</a>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: '',
};

export default Smurf;
