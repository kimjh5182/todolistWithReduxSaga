import {takeEvery, put, call} from 'redux-saga/effects';
import getTodoApi from '../@api/todo';
import {
  GET_TODO,
  DELETE_TODO,
  getTodoSuccess,
  deleteTodoSuccess,
  createTodoSuccess,
  updateTodoSuccess,
  CREATE_TODO,
  UPDATE_TODO,
} from '../actions/index';

export function* getTodo() {
  try {
    const {data} = yield call(getTodoApi.getTodoList);
    yield put(getTodoSuccess(data));
  } catch (error) {
    console.log('GET_TODO_FAIL', error);
  }
}

function* deleteTodo({id}) {
  try {
    const {data} = yield call(getTodoApi.deleteTodo, id);
    console.log(data, 'in saga');
    yield put(deleteTodoSuccess(id));
  } catch (error) {
    console.log('DELETE_TODO_FAIL', error);
  }
}

function* createTodo({content}) {
  try {
    const {data} = yield call(getTodoApi.createTodo, content);
    console.log(data, 'in saga');
    yield put(createTodoSuccess(data));
  } catch (error) {
    console.log('CREATE_TODO_FAIL', error);
  }
}

function* updateTodo({payload}) {
  console.log(payload);
  try {
    const {data} = yield call(getTodoApi.updateTodo, payload);
    console.log(data, 'in saga');
    yield put(updateTodoSuccess(data, payload.id));
  } catch (error) {
    console.log('UPDATE_TODO_FAIL', error);
  }
}

function* rootSaga() {
  yield takeEvery(GET_TODO, getTodo);
  yield takeEvery(DELETE_TODO, deleteTodo);
  yield takeEvery(CREATE_TODO, createTodo);
  yield takeEvery(UPDATE_TODO, updateTodo);
}

export default rootSaga;
