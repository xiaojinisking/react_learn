import React , { Component } from 'react';

class UncontrolComponent extends Component{
	constructor(props){
		super(props);
		this.handSubmit = this.handSubmit.bind(this);
	}

	handSubmit(e){
		e.preventDefault();
		console.log(`selected file - ${this.fileInput.files[0].name}`)
		console.log(`A name was submited:${this.inputtext.value}`)
	}

	render() {
		return (
			<form action="" onSubmit={this.handSubmit}>
				<input type="text" defaultValue="默认值" ref={(input)=>this.inputtext=input}/>

				Upload file
				<input
					type="file"
					ref={input=>{this.fileInput = input}}
				/>
				<input type="submit" value="提交"/>

			</form>
		);
	}
}


export  default UncontrolComponent;