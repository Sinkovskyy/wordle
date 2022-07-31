import { call, takeLatest, select, put } from 'redux-saga/effects'
import { Game } from '../../../config'
import { toastActions } from '../toast'
import { gameActions } from './actions'
import { ApiGameService } from './api.service'
import { GAME_TEXT } from './config'
import { getGameSelector } from './selectors'

function* verifyWordWorker() {
  try {
    const { attemps, guessedWord } = yield select(getGameSelector)

    const word = attemps.at(-1).word

    if (word.length < Game.WORD_LENGTH) {
      yield put(gameActions.editWord({ attemp: { error: true } }))

      yield put(
        toastActions.setToast({
          text: GAME_TEXT.notEnoughtLetters.text,
          isVisible: true,
          closeTime: GAME_TEXT.notEnoughtLetters.closeTime,
        })
      )

      return
    }

    if (word == guessedWord) {
      yield put(
        toastActions.setToast({
          text: GAME_TEXT.guessWord.text,
          isVisible: true,
          closeTime: GAME_TEXT.guessWord.closeTime,
        })
      )
    }

    yield call([ApiGameService, ApiGameService.verifyWord], {
      word,
    })

    if (attemps.length == Game.ATTEMPS) {
      yield put(
        toastActions.setToast({
          text: guessedWord,
          isVisible: true,
        })
      )
    }

    yield put(gameActions.saveWord())
  } catch (e) {
    yield put(gameActions.editWord({ attemp: { error: true } }))
    yield put(
      toastActions.setToast({
        text: GAME_TEXT.notInWordList.text,
        isVisible: true,
        closeTime: GAME_TEXT.notInWordList.closeTime,
      })
    )
  }
}

export function* gameWatcher() {
  yield takeLatest(gameActions.verifyWord, verifyWordWorker)
}
