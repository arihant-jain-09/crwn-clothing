import {all, call, put, takeLatest} from 'redux-saga/effects'
import { firestore, TransformData } from '../../firebase/firebase.utils';
import { errorFetching, successFetching } from './shop.actions';

export function* FetchAsync(){
    try{
        const collectionRef=firestore.collection('collections');
        const snapshot=yield collectionRef.get();
        const mydata=yield call(TransformData,snapshot);
        yield put(successFetching(mydata));
    }
    catch (error){
        yield put(errorFetching(error.message))
    }
}

export function* FetchStart(){
    yield takeLatest('FETCH_START',FetchAsync)
}

export function* Shopsagas(){
    yield all([call(FetchStart)])
}