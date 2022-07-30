import { all } from 'redux-saga/effects'
import { gameWatcher } from './modules'

function* rootSaga() {
  yield all([gameWatcher()])
}

export default rootSaga
