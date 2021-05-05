import RootReducer from './root-reducer.js'
import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const middleware=[logger,thunk]
const store=createStore(RootReducer,applyMiddleware(...middleware))
const persistor=persistStore(store)
export {store,persistor};
