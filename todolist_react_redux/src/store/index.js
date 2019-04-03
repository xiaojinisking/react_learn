import {createStore, compose, applyMiddleware} from "redux";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./mySaga";

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga);

export default store;