import RootReducer from './root-reducer.js'
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga.js'
const sagaMiddleware=createSagaMiddleware();
const middleware=[logger,sagaMiddleware]
const store=createStore(RootReducer,applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)
export {store};
