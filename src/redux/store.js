import RootReducer from './root-reducer.js'
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
const middleware=[logger]
const store=createStore(RootReducer,applyMiddleware(...middleware))
export default store;
