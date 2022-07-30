import { createAction } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'
import { sliceActions } from './reducer'

export const gameActions = {
  ...sliceActions,
  verifyWord: createAction(ActionTypes.VERIFY_WORD),
}
