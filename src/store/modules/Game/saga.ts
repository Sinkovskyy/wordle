import { call, takeLatest, select, put } from 'redux-saga/effects'
import { Game } from '../../../config'
import { toastActions } from '../Toast'
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

    // if user guessed the word
    if (word == guessedWord) {
      yield put(gameActions.setKeyboard({ keyboardEnabled: false }))
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

    // if last attemp was not success
    if (attemps.length == Game.ATTEMPS) {
      yield put(gameActions.setKeyboard({ keyboardEnabled: false }))
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
