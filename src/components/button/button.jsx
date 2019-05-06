import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick() {
		console.log(this)
	}
	render() {
		return <button onClick={this.handleClick.bind(this)}>{this.props.text}</button>;
	}
}

export default Button;