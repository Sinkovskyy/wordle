import { call, takeLatest, select, put } from 'redux-saga/effects'
import { Game } from '../../../config'
import { TResponse } from '../../types'
import { gameActions } from './actions'
import { ApiGameService } from './api.service'
import { getGameSelector } from './selectors'

function* verifyWordWorker() {
  try {
    const { attemps } = yield select(getGameSelector)

    const word = attemps.at(-1).word

    if (word.length < Game.WORD_LENGTH) {
      yield put(gameActions.editWord({ attemp: { error: true } }))
      return
    }

    const response: TResponse = yield call([ApiGameService, ApiGameService.verifyWord], {
      word,
    })

    if (response.status == 200) {
      yield put(gameActions.saveWord())
    }
  } catch (e) {
    yield put(gameActions.editWord({ attemp: { error: true } }))
  }
}

export function* gameWatcher() {
  yield takeLatest(gameActions.verifyWord, verifyWordWorker)
}
