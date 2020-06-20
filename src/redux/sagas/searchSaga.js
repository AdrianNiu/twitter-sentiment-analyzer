import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';



const searchReducer = (state = [], action) => {
    console.log('in searchReducer');
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return action.payload
        default:
            return state
    }
}

const favoriteReducer = (state = [], action) => {
    console.log('in favoriteReducer', action.type);
    switch (action.type) {
        case 'FAVES':
            return action.payload
        default:
            return state
    }
}

function* searchSaga() {
    yield takeEvery('GET_TWT', getTwtSaga);
    yield takeEvery('GET_GIF', getGifSaga);
    yield takeEvery('GET_FAV', getFavoriteSaga);
    yield takeEvery('POST_FAV', postFavoriteSaga);
    yield takeEvery('PUT_FAV', putFavoriteSaga);
    yield takeEvery('DELETE_FAV', deleteFavoriteSaga);
}
function* deleteFavoriteSaga(action) {
    console.log('in DeleteFavoriteSaga', action.payload);
    try {
        yield axios.delete(`/api/favorite/${action.payload}`);
        yield put({ type: 'GET_FAV' });
    }
    catch (error) {
        console.log('Error with favorite Delete', error);
    }

}
function* putFavoriteSaga(action) {
    console.log('in putFavoriteSaga', action.payload);
    try {
        yield axios.put(`/api/favorite/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_FAV' });
    }
    catch (error) {
        console.log('Error with Favorite PUT', error);
    }
}

function* getTwtSaga(action) {
    console.log('in getTwtSaga', action.payload);
    try {
        const response = yield axios.get(`/api/twitter/${action.payload}`);
        yield put({ type: 'SEARCH_RESULTS', payload: response.data })
    }
    catch (error) {
        console.log('Error with Search GET', error);
    }
}

function* getGifSaga(action) {
    console.log('in getGifSaga', action.payload);
    try {
        const response = yield axios.get(`/api/search/${action.payload}`);
        yield put({ type: 'SEARCH_RESULTS', payload: response.data })
    }
    catch (error) {
        console.log('Error with Search GET', error);
    }
}

function* getFavoriteSaga(action) {
    console.log('in getTWEETSaga', action);
    try {
        const response = yield axios.get('/api/favorite');
        console.log('Heres the GET response for /api/favorite', response.data);
        yield put({ type: 'FAVES', payload: response.data })
    }
    catch (error) {
        console.log('Error with Faves GET', error);
    }
}

function* postFavoriteSaga(action) {
    console.log('in postFavoriteSaga', action.payload);
    try {
        yield axios.post('/api/favorite', action.payload);
        yield put({ type: 'GET_FAV' });
    }
    catch (error) {
        console.log('Error on POST', error, store);
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        searchReducer,
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(searchSaga);




export default searchSaga;