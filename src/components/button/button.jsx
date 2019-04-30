import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		return <button>{this.props.text}</button>;
	}
}

export default Button;