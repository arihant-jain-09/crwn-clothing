import {call,all} from 'redux-saga/effects'
import { cartsagas } from './cart/cart.sagas'
import { Shopsagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'

export default function* rootSaga(){
    yield all([call(Shopsagas),call(userSagas),call(cartsagas)])
}
