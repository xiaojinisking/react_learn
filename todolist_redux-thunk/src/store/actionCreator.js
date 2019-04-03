import * as ACTION_TYPES from './actionTypes';
import axios from "axios";


/**
 * 输入框数据 action
 * @param value
 * @returns {{type: string, value: *}}
 */
export const getInputChangeAction = (value) =>{
	return {
		type: ACTION_TYPES.CHANGE_INPUT_VALUE,
		value: value
	}
}

/**
 * 添加item action
 * @returns {{type: string}}
 */
export const getAddTodoItemAction = ()=>({
	type:ACTION_TYPES.ADD_TODO_ITEM
})

/**
 * 删除tem action
 * @param index
 * @returns {{index: *, type: string}}
 */
export const getDelTodoItemAction = (index)=>{
	return {
		type:ACTION_TYPES.DELETE_TODO_ITEM,
		index
	}
}

/**
 * 初始化数据
 * @param data
 * @returns {{data: *, type: string}}
 */
export const initStateDataAction = (data)=>{
	return {
		type:ACTION_TYPES.INIT_STATE_DATA,
		data
	}
}


/**
 * 异步获取数据redux-thunk
 * @returns {Function}
 */
export const getTodoList = ()=>{
	return dispatch =>{
		axios.get('/lists').then((res)=>{
			const action = initStateDataAction(res.data);
			console.log(3);
			dispatch(action);
			console.log(4);
		})
	}
}

