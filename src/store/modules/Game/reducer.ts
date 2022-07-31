import { createSlice } from '@reduxjs/toolkit'
import { Game } from '../../../config'
import { TDataWrapper } from '../../types'

import {
  TEditWordPayload,
  TInitialState,
  TSetGuessedWordPayload,
  TSetKeyboardStatePayload,
} from './types'

const initialState: TInitialState = {
  attemps: [{ error: false, word: '' }],
  guessedWord: null,
  keyboardEnabled: true,
}

export const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setKeyboard: (state, { payload }: TDataWrapper<TSetKeyboardStatePayload>) => {
      state.keyboardEnabled = payload.keyboardEnabled
    },
    setGuessedWord: (state, { payload }: TDataWrapper<TSetGuessedWordPayload>) => {
      state.guessedWord = payload.guessedWord
    },
    saveWord: (state) => {
      state.attemps = [...state.attemps, { error: false, word: '' }]
    },
    editWord: (state, { payload }: TDataWrapper<TEditWordPayload>) => {
      // If word is too long
      if (payload.attemp.word && payload.attemp.word.length > Game.WORD_LENGTH) {
        return
      }

      // Set new word
      state.attemps = [
        ...state.attemps.slice(0, state.attemps.length - 1),
        { word: '', ...state.attemps.at(-1), error: false, ...payload.attemp },
      ]
    },
    restartGame: (state) => {
      state.guessedWord = initialState.guessedWord
      state.attemps = initialState.attemps
      state.keyboardEnabled = initialState.keyboardEnabled
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
