import RootReducer from './root-reducer.js'
import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga.js'

const sagaMiddleware=createSagaMiddleware();
const middleware=[logger,sagaMiddleware]
const store=createStore(RootReducer,applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)
const persistor=persistStore(store)
export {store,persistor};
