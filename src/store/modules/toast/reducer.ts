import { createSlice } from '@reduxjs/toolkit'
import { TDataWrapper } from '../../types'
import { TInitialState, TSetToastPayload } from './types'

const initialState: TInitialState = {
  isVisible: false,
  text: '',
}

export const slice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    SET_TOAST: (state, { payload }: TDataWrapper<TSetToastPayload>) => {
      state = { ...state, ...payload }
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
