import React from 'react';

class RefComponent extends React.Component{

	constructor(props){
		super(props);
		this.myRef=React.createRef();
	}

	handleClick(){
		//使用原生的DOM API获取焦点
		this.refs.myInput.focus();
		// this.myRef.current.focus();
		// this.myInput.focus();
		console.log(this.myRef.current)
	}

	handleClickDefault(e){
		console.log(1);
		e.preventDefault();
		console.log(2);
	}

	render() {
		return (
			<div>
				<input type="text" ref="myInput"/>
				{/*<input type="text" ref={this.myRef}/>*/}
				{/*<input type="text" ref={(myInput)=>{this.myInput=myInput}}/>*/}
				<input
					type="button"
					value="点我输入框获取焦点"
					onClick={this.handleClick.bind(this)}
				/>

				<a
					href="http://www.baidu.com"
					onClick={this.handleClickDefault.bind(this)}
				>跳转
				</a>
			</div>
		);
	}
}

export default RefComponent;