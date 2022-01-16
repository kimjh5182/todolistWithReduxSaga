import { takeEvery, put, call } from 'redux-saga/effects';
import allAction from '../actions/index';
import getTodoApi from '../@api/todo';
import { GET_TODO,getTodoSuccess,getTodoFail } from '../actions/index';

function* getTodo() {
    console.log("todolist 불러오기 성공");
    try{
        const { data } = yield call(getTodoApi.getTodoList);
        console.log(data, 'in saga');
        yield put(getTodoSuccess(data));
    }catch(error){
        yield put(getTodoFail(error));
    }
}

function* rootSaga(){
    yield takeEvery(GET_TODO, getTodo);
}

export default rootSaga;