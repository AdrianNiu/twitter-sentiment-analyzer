import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putNoteSaga(action){
    try {
        console.log('putNoteSaga action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/favorite/notes/${action.payload.id}`, action.payload);
        //Request information back from the server after change
        yield put({ type: 'GET_FAV' });
    } catch(error) {
        console.log('error with put request for adding notes', error);
    }
}

function* addNoteSaga() {
    yield takeLatest('PUT_NOTES', putNoteSaga);
}

export default addNoteSaga;