import * as ACTION_TYPES from './actionTypes';

const defaultState = {
	inputValue: '',
	list: [1, 2]
}

//reducer可以接受state,但是决不能修改state,reducer只是根据旧state生成了新state,然后交给store,store自己去更新到state
//纯函数是指，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。（比如state.inputValue=action.value 这种操作就是副作用 ）
export default (state = defaultState, action) => {
	console.log(state, action);

	if (action.type === ACTION_TYPES.CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));		//深拷贝一份state
		newState.inputValue = action.value;
		return newState;
	}

	if (action.type === ACTION_TYPES.INIT_STATE_DATA) {
		const newState = JSON.parse(JSON.stringify(state));		//深拷贝一份state
		newState.list = action.data;
		return newState;
	}

	if (action.type === ACTION_TYPES.ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));   //深拷贝一份state
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}

	if (action.type === ACTION_TYPES.DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));   //深拷贝一份state
		newState.list.splice(action.index,1);
		return newState;
	}

	return state;
}