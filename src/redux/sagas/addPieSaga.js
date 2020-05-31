import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* postPieSaga(action) {
    try {
        console.log('In addPieSaga action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.post(`/api/pie`, action.payload);
        //Request information back from the server after change
        yield put({ type: 'GET_PIE' });
    } catch (error) {
        console.log('error with put request for adding pies', error);
    }
}

function* getPieSaga(action) {
    console.log('in getPieSaga', action);
    try {
        const response = yield axios.get('/api/pie');
        console.log('Heres the GET response for /api/pie', response.data);
        yield put({ type: 'PIES', payload: response.data })
    }
    catch (error) {
        console.log('Error with PIES GET', error);
    }
}

function* addPieSaga() {
    yield takeLatest('SAVE_PIE', postPieSaga);
    yield takeLatest('GET_PIE', getPieSaga);
}

export default addPieSaga;