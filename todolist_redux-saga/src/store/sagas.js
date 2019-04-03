import {put, takeEvery} from 'redux-saga/effects'
import * as ACTION_CREATORS from './actionCreator';
import axios from "axios";
import * as ACTION_TYPES from "./actionTypes";

function* fetchTodoLists() {
	console.log(4);
	try{
		const res = yield axios.get('/lists');
		const action = ACTION_CREATORS.initStateDataAction(res.data);
		yield put(action);
		console.log(res);
	}catch (e) {
		console.log(e);
	}
}


function* mySaga() {
	yield takeEvery(ACTION_TYPES.GET_INIT_TODOLIST_DATA, fetchTodoLists);
}

export default mySaga;