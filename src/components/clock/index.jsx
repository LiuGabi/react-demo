import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timeID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnMount() {
		clearInterval(this.timeID);
	}
	tick() {
		this.setState((preState, props) => {
			return {date: new Date()}
		});
	}
	render() {
		return (
			<button>It is {this.state.date.toLocaleTimeString()}.</button>
		);
	}
}

export default Clock;