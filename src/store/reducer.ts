import { combineReducers } from 'redux'
import { gameReducer, toastReducer } from './modules'

export const rootReducer = combineReducers({
  game: gameReducer,
  toast: toastReducer,
})
