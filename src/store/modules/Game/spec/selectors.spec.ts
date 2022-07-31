import { RootState } from '../../../types'
import { getGameSelector } from '../selectors'
import { TInitialState } from '../types'

describe('Game selector', () => {
  it('Must return initial state value', () => {
    const game: TInitialState = {
      attemps: [{ error: false, word: '' }],
      guessedWord: null,
      keyboardEnabled: true,
    }

    const result = getGameSelector({ game } as RootState)
    expect(result).toBe(game)
  })
})
