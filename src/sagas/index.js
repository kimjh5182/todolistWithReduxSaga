import { takeEvery, put, call } from 'redux-saga/effects';
import getTodoApi from '../@api/todo';
import { GET_TODO,DELETE_TODO,
    getTodoSuccess,getTodoFail,
    deleteTodoSuccess,deleteTodoFail,
    createTodoSuccess,createTodoFail, CREATE_TODO
 } from '../actions/index';

function* getTodo() {
    try{
        const { data } = yield call(getTodoApi.getTodoList);
        yield put(getTodoSuccess(data));
    }catch(error){
        yield put(getTodoFail(error));
    }
}

function* deleteTodo({id}){
    try{
        const { data } = yield call(getTodoApi.deleteTodo,id);
        console.log(data, 'in saga');
        yield put(deleteTodoSuccess(id));
    }catch(error){
        yield put(deleteTodoFail(error));
    }
}

function* createTodo({content}){
    try{
        const { data } = yield call(getTodoApi.createTodo,content);
        console.log(data, 'in saga');
        yield put(createTodoSuccess(data));
    }catch(error){
        yield put(createTodoFail(error));
    }
}

function* rootSaga(){
    yield takeEvery(GET_TODO, getTodo);
    yield takeEvery(DELETE_TODO,deleteTodo);
    yield takeEvery(CREATE_TODO,createTodo);
}

export default rootSaga;