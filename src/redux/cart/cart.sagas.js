import {put,call,all, takeLatest, takeEvery, select} from 'redux-saga/effects'
import { addCartitems, GetCurrentCartItems } from '../../firebase/firebase.utils'
import { addItem, ClearCart, DecreaseItem, setcartitems } from './cart.actions'
import { createSelectorCart } from './cart.selector'
import addItemToCart, { removeItemFromCart } from './cart.utils'

export function* clearcartSuccess(){
    yield put(ClearCart())
}
export function* clearcart(){
    yield takeLatest('SignOut_Start',clearcartSuccess)
}

export function* additemsuccess({payload}){
    const cartitems=yield select(createSelectorCart);
    const result=yield addItemToCart(cartitems,payload)
    yield put(addItem(result));
    yield call(addCartitems,result);
}

export function* additem(){
    yield takeEvery('ADD_ITEM_START',additemsuccess)
}

export function* decreaseitemsuccess({payload}){
    const cartitems=yield select(createSelectorCart);
    const result=yield removeItemFromCart(cartitems,payload);
    yield put(DecreaseItem(result));
    yield call(addCartitems,result);
}

export function* decreaseitem(){
    yield takeEvery('decrease_item_start',decreaseitemsuccess)
}

export function* currentcartitemssuccess(){
    const cart=yield call(GetCurrentCartItems);
    yield put(setcartitems(cart))
}

export function* currentcartitems(){
     yield takeLatest('Sign_In_Success',currentcartitemssuccess)
}

export function* cartsagas(){
    yield all([call(clearcart),call(additem),call(decreaseitem),call(currentcartitems)])
}

