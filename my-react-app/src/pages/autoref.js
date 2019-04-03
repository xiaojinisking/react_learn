import React from 'react';
import RefComponent from './refComponent';

class Autoref extends React.Component{
	constructor(props){
		super(props);
		this.textInput = React.createRef();
	}


	componentDidMount() {
		console.log(this.textInput.current);
		this.textInput.current.handleClick();
	}


	render() {
		return (
			<RefComponent ref={this.textInput}/>
		);
	}
}

export  default Autoref;