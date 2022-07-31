import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducer'
import { Env } from '../config'

const persistedReducer = persistReducer(
  {
    key: Env.REDUX_STORE_NAME,
    storage,
    whitelist: ['game'],
  },
  rootReducer
)

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const store = configureStore({ reducer: persistedReducer, middleware })

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
