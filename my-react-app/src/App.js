import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './pages/clock';
import RefDom from './pages/refComponent';
import Autoref from './pages/autoref';
import ToggleBtn from './pages/toggle.js';
import Greeting from "./pages/condition";
import LoginControl from "./pages/logincontrol";
import NumberList from "./pages/list";
import ControlComponent from "./pages/controlComponent";
import UncontrolComponent from "./pages/uncontrolComponent";

class Welcome2 extends Component {
	render() {
		return <h1>Hello world,{this.props.name}</h1>
	}
}


class App extends Component {
	constructor(props){
		super(props);
		this.state={
			islogin:true
		}
	}

	handlerClick(){
		console.log(111);
		this.setState((prevState)=>({islogin: !prevState.islogin}))
	}

	render() {

		function Welcome(props) {
			return <h1>Hello ,{props.name}</h1>
		}

		function WelcomeGroup() {
			return (
				<div>
					<Welcome name="people1"/>
					<Welcome name="people2"/>
				</div>
			)
		}



		const name = 'jack';
		const numbers = [1,2,3,4];
		return (
			<div className="App">
				<UncontrolComponent/>
				<ControlComponent/>
				<NumberList numbers={numbers}/>
				<LoginControl/>

				<button onClick={this.handlerClick.bind(this)}>111</button>
				<Greeting isLoggedIn={this.state.islogin} />
				<ToggleBtn/>
				<RefDom/>
				<Autoref/>
				<Clock title='我的手表'/>
				<Clock/>
				<Welcome name={"Tom"}/>
				<Welcome2 name={"Bob"}/>
				<WelcomeGroup/>

				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<h1>Hello World {name}</h1>
					{React.createElement(
						'h1',
						{},
						'Hello Wolrd ' + name
					)}

				</header>


			</div>
		);
	}
}

export default App;
