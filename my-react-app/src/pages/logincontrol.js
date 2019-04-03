import React from 'react';
import Greeting from "./condition";

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}


function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}


class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	handleLogoutClick(){
		this.setState({isLoggedIn:false})
	}

	handleLoginClick(){
		this.setState({isLoggedIn:true})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;	//定义元素变量

		if(isLoggedIn){
			button=<LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
		}else{
			button=<LoginButton onClick={this.handleLoginClick.bind(this)}/>
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}	//使用元素变量
			</div>
		)
	}
}

export default LoginControl;