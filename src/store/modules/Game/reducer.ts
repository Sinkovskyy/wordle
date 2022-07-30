import { createSlice } from '@reduxjs/toolkit'
import { Game } from '../../../config'
import { TDataWrapper } from '../../types'

import { TEditWordPayload, TIntialState } from './types'

const initialState: TIntialState = {
  attemps: [{ error: false, word: '' }],
  guessedWord: null,
}

export const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    SAVE_WORD: (state) => {
      state.attemps = [...state.attemps, { error: false, word: '' }]
    },
    EDIT_WORD: (state, { payload }: TDataWrapper<TEditWordPayload>) => {
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
  },
})

export const sliceActions = slice.actions

export default slice.reducer
