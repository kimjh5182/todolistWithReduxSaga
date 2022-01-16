import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store =createStore(reducer, middleware);

export default store;

sagaMiddleware.run(rootSaga);
