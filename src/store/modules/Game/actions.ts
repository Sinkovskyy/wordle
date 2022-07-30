import { createAction } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'
import { sliceActions } from './reducer'
import { TVerifyWordPayload } from './types'

export const gameActions = {
  ...sliceActions,
  VERIFY_WORD: createAction(ActionTypes.VERIFY_WORD, (payload: TVerifyWordPayload) => ({
    payload,
  })),
}
