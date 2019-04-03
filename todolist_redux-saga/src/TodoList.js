import React, {Component} from 'react';
import 'antd/dist/antd.css';


import store from './store';
import * as ACTION_CREATORS from './store/actionCreator';
import TodoListUi from './TodoListUi';



class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handInputChange = this.handInputChange.bind(this);
		this.handStoreChange = this.handStoreChange.bind(this);
		this.handSubmie = this.handSubmie.bind(this);
		this.handItemDelete = this.handItemDelete.bind(this);
		store.subscribe(this.handStoreChange);	//监听state变化
	}


	render() {
		return <TodoListUi
			handInputChange={this.handInputChange}
			inputValue={this.state.inputValue}
			handSubmie={this.handSubmie}
			handItemDelete={this.handItemDelete}
			list={this.state.list}
		/>
	}

	componentDidMount() {
		console.log(1);
		const action = ACTION_CREATORS.getInitTodoList();
		console.log(2);
		store.dispatch(action);
		console.log(5)
	}

	handInputChange(e) {
		const action = ACTION_CREATORS.getInputChangeAction(e.target.value)

		store.dispatch(action);
	}

	handStoreChange() {
		this.setState(store.getState());
	}

	handSubmie() {
		const action = ACTION_CREATORS.getAddTodoItemAction();
		store.dispatch(action);
	}

	handItemDelete(index) {
		const action =ACTION_CREATORS.getDelTodoItemAction(index);
		store.dispatch(action);
	}
}

export default TodoList;