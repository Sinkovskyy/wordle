import { combineReducers } from 'redux'
import { gameReducer } from './modules'

export const rootReducer = combineReducers({
  game: gameReducer,
})
