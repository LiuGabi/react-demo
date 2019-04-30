import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
	constructor(props) {
		super(props);
		console.log(super(props));
	}
	render() {
		return <button>{this.props.text}</button>;
	}
}

export default Button;