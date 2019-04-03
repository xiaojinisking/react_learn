import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
	static defaultProps={
		title:'bob'
	}



	//构造函数来初始化状态state
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	//挂载
	componentDidMount() {
		this.timerId = setInterval(() => {
			this.tick()
		}, 1000)
	}

	//卸载
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		//状态的更新 this.setState()
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div>
				<h1>Hello World，{this.props.title}</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
				<hr/>
			</div>
		);
	}
}

// Clock.defaultProps={
// 	title:'bob'
// }

Clock.propTypes={
	title:PropTypes.string.isRequired
}


export default Clock;