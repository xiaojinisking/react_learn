import { put, takeEvery} from 'redux-saga/effects'
import * as ACTION_TYPES from './actionTypes';
import * as ACTION_CREATORS from './actionCreators'
import axios from 'axios';

function* fetchList() {
	try {
		const res = yield axios.get('/todolists');
		let action = ACTION_CREATORS.getInitListDataAction(res.data);
		yield put(action);
	} catch (e) {

	}
}

function* mySaga() {
	yield takeEvery(ACTION_TYPES.GET_TODO_LIST_DATA, fetchList);
}

export default mySaga;