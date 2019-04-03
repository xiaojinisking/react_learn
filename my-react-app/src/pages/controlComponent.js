import React, {Component} from 'react';


class ControlComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textName: '',
			selectName: 1,
			textareaName: 'Hello world'
		};
		this.handInputChange = this.handInputChange.bind(this);
		this.handSubmit = this.handSubmit.bind(this);
	}


	handInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}


	handSubmit(e) {
		e.preventDefault();
		console.log("input value", this.state.textValue)
	}

	render() {
		return (
			<form action="">
				<input name="textName" type="text" value={this.state.textName} onChange={this.handInputChange}/>
				<select name="selectName" id="" value={this.state.selectName} onChange={this.handInputChange}>
					<option value="">请选择一个水果</option>
					<option value="1">苹果</option>
					<option value="2">菠萝</option>
					<option value="3">橘子</option>
					<option value="4">香蕉</option>
				</select>

				<textarea name="textareaName" value={this.state.textareaName} onChange={this.handInputChange}/>


				<input type="submit" value="提交" onClick={this.handSubmit}/>
			</form>
		);
	}
}

export default ControlComponent;