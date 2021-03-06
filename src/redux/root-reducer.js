import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import userReducer from './user/user.reducer.js'
import cartReducer from './cart/cart.reducer.js'
import DirectoryReducer from './directory/directory.reducer.js'
import ShopReducer from './shop/shop.reducer.js'
import storage from 'redux-persist/lib/storage'

export const persistConfig={
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer= combineReducers({
  user:userReducer,
  cart:cartReducer,
  directory:DirectoryReducer,
  shop:ShopReducer
})
export default persistReducer(persistConfig,rootReducer)
