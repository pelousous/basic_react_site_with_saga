import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';
//import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import {fetchCollectionsStart} from './shop/shop.saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// }

//const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// then run the saga
sagaMiddleware.run(fetchCollectionsStart)

//export const persistor = persistStore(store);



export default store;