import React, {Component} from 'react';
import store from './store';
import * as ACTION_CREATORS from './store/actionCreators';
import {connect} from "react-redux";

class TodoList extends Component {
	render() {
		const {inputValue, list, handeleInputChange,handleSubmit,handleDelete} = this.props;

		return (
			<div>
				<div>
					<input type="text" value={inputValue} onChange={handeleInputChange}/>
					<button onClick={handleSubmit}>提交</button>
				</div>
				<div>
					<ul>
						{
							list.map((item, index) => (
								<li onClick={() => handleDelete(index)} key={index}>{item}</li>
							))
						}
					</ul>
				</div>
			</div>
		);
	}

	componentDidMount() {
		let action = ACTION_CREATORS.getSyncListDataAction();
		store.dispatch(action);
	}

}

//将store中的state映射到本地的Props
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

//将dispath方法映射到props
const mapDispatchToProps = (dispatch) => {
	return {
		handeleInputChange(e) {
			let action = ACTION_CREATORS.getInputChangeAction(e.target.value);
			dispatch(action);
		},
		handleSubmit() {
			let action = ACTION_CREATORS.getAddTodoListItemAction();
			dispatch(action);
		},
		handleDelete(index) {
			let action = ACTION_CREATORS.getDelTodoListItemAction(index);
			dispatch(action);
		}
	}
}

//connect(mapStateToProps,null)(TodoList) 传入UI组件生成一个新的容器组件 export出去
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);