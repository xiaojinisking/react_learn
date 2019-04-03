import * as ACTION_TYPES from './actionTypes';

/**
 * 获取输入值
 * @param value
 * @returns {{type: string, value: *}}
 */
export const getInputChangeAction = (value) => {
	return {
		type: ACTION_TYPES.CHANGE_INPUT_VALUE,
		value
	}
}

/**
 * 获取添加item action
 * @returns {{type: string}}
 */
export const getAddTodoListItemAction = () => {
	return {
		type: ACTION_TYPES.ADD_TODO_LIST_ITEM
	}
}

/**
 * 获取删除item action
 * @param index
 * @returns {{index: *, type: string}}
 */
export const getDelTodoListItemAction = (index) => {
	return {
		type: ACTION_TYPES.DEL_TODO_LIST_ITEM,
		index
	}
}

/**
 * 获取初始化list数据都action
 * @param list
 * @returns {{type: string, list: *}}
 */
export const getInitListDataAction = (list) => {
	return {
		type: ACTION_TYPES.INIT_TODO_LIST_DATA,
		list
	}
}


export const getSyncListDataAction = () => {
	return {
		type:ACTION_TYPES.GET_TODO_LIST_DATA
	}
}