import React from 'react';

class ToggleBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			isToggleOn:true,
			name:'Hello world'
		}
	}

	handleClick(){
		console.log(this);
		this.setState(prevState=>({
			isToggleOn:!prevState.isToggleOn
		}))
	}

	handleClickPre(name,e){
		e.preventDefault();
		console.log(name);
	}

	handleClickArrow(name,e){
		e.preventDefault();
		console.log(this);
		console.log(name);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick.bind(this,this.state.name)}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>

				<a
					href="http://www.baidu.com"
					onClick={this.handleClickPre.bind(this,this.state.name)}
				>跳转链接</a>

				<a
					href="http://www.baidu.com"
					onClick={(e)=>this.handleClickArrow(this.state.name,e)}
				>
					Arrow handle
				</a>
			</div>

		);
	}
}


export default ToggleBtn;