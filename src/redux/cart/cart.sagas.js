import {put,call,all, takeLatest} from 'redux-saga/effects'
import { ClearCart } from './cart.actions'


export function* clearcartSuccess(){
    yield put(ClearCart())
}
export function* clearcart(){
    yield takeLatest('SignOut_Start',clearcartSuccess)
}


export function* cartsagas(){
    yield all([call(clearcart)])
}