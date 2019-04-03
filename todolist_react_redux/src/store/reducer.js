import * as ACTION_TYPES from './actionTypes';

const defaultStatus = {
	inputValue: '',
	list: ["dell"]
}
//reducer 基础模型，就是一个函数，输入当前的state,和action输出一个新的action交给store,然后store去更新state.
const reducer = (state = defaultStatus, action) => {

	//获取输入框数据
	if (action.type === ACTION_TYPES.CHANGE_INPUT_VALUE) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	//添加item项目
	if (action.type === ACTION_TYPES.ADD_TODO_LIST_ITEM) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}

	//删除item项目
	if (action.type === ACTION_TYPES.DEL_TODO_LIST_ITEM) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	//初始化list 数据
	if (action.type === ACTION_TYPES.INIT_TODO_LIST_DATA) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list = action.list;
		return newState;
	}


	return state;
}

export default reducer;