import gameReducer, { sliceActions } from '../reducer'
import { TInitialState } from '../types'

const initialState: TInitialState = {
  attemps: [{ error: false, word: '' }],
  guessedWord: null,
  keyboardEnabled: true,
}

describe('Game reducer', () => {
  it("setKeyboard action should set keyboard typing state 'enable state'", () => {
    const action = sliceActions.setKeyboard({ keyboardEnabled: false })

    const result = gameReducer(initialState, action)
    expect(result).toEqual({ ...initialState, keyboardEnabled: false })
  })

  it('Must to generate random word', () => {
    const action = sliceActions.generateGuessedWord()

    const result = gameReducer(initialState, action)
    expect(result.guessedWord).not.toBeNull()
  })

  it('Must generate new empty word', () => {
    const action = sliceActions.saveWord()

    const result = gameReducer(initialState, action)
    expect(result.attemps.length).toEqual(2)
  })

  it('Must reset state to initial state', () => {
    const state = {
      attemps: [{ error: true, word: 'test' }],
      guessedWord: 'GUESS',
      keyboardEnabled: false,
    }

    const action = sliceActions.restartGame()

    const result = gameReducer(state, action)
    expect(result).toEqual(initialState)
  })
})
