import { createSlice } from '@reduxjs/toolkit'
import { TDataWrapper } from '../../types'
import { TInitialState, TSetToastPayload } from './types'

const initialState: TInitialState = {
  isVisible: false,
  text: '',
  closeTime: null,
}

export const slice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, { payload }: TDataWrapper<TSetToastPayload>) => {
      state.isVisible = payload.isVisible || state.isVisible
      state.text = payload.text || state.text
      state.closeTime = payload.closeTime || null
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
