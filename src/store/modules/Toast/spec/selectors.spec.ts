import { getToastSelector } from '../selectors'
import { TInitialState } from '../types'
import { RootState } from '../../../types'

describe('Toast selector', () => {
  it('Must return initial state value', () => {
    const toast: TInitialState = { isVisible: false, text: '', closeTime: null }

    const result = getToastSelector({ toast } as RootState)
    expect(result).toBe(toast)
  })
})
