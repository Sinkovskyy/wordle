import { call, takeLatest } from 'redux-saga/effects'
import { TDataWrapper, TResponse } from '../../types'
import { gameActions } from './actions'
import { ApiGameService } from './api.service'
import { TVerifyWordPayload } from './types'

export function* checkoutWordWorker({ payload }: TDataWrapper<TVerifyWordPayload>) {
  try {
    const { word } = payload

    const response: TResponse = yield call([ApiGameService, ApiGameService.verifyWord], {
      word,
    })

    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

export function* gameWatcher() {
  yield takeLatest(gameActions.VERIFY_WORD, checkoutWordWorker)
}
